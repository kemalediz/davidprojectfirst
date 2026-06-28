// Marvelpedia wiki UI.
// The character list is PUBLIC — anyone can browse it and read full details
// without signing in (like Wikipedia). Signing in (see auth.js) only unlocks
// per-user favourites, which are stored in Firestore under users/{uid}.

import { db, isConfigured } from "./firebase-config.js";
import {
  collection,
  getDocs,
  query as fsQuery,
  orderBy,
  doc,
  getDoc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { localAuth } from "./auth-local.js";

// Favourites + auth use Firebase when it's configured, otherwise the local
// (localStorage) fallback in auth-local.js.
const useFirebase = isConfigured;

const els = {
  grid: document.getElementById("grid"),
  filters: document.getElementById("filters"),
  search: document.getElementById("search"),
  sort: document.getElementById("sort"),
  count: document.getElementById("result-count"),
  empty: document.getElementById("empty"),
  notice: document.getElementById("notice"),
  dataMessage: document.getElementById("data-message"),
  modal: document.getElementById("modal"),
  modalBody: document.getElementById("modal-body"),
  charControls: document.getElementById("char-controls"),
  primaryNav: document.getElementById("primary-nav"),
  views: {
    characters: document.getElementById("view-characters"),
    creation: document.getElementById("view-creation"),
    films: document.getElementById("view-films"),
  },
  creationBody: document.getElementById("creation-body"),
  filmsBody: document.getElementById("films-body"),
  filmsToolbar: document.getElementById("films-toolbar"),
};

const BASE_TITLE = document.title;

let characters = [];
let activeCategory = "All";
let query = "";
let favoritesOnly = false;
let sortBy = "name-asc";

// Favourites state (only meaningful when signed in).
let currentUser = null;
let favorites = new Set();

// ---- Helpers ---------------------------------------------------------------

function escapeHtml(value) {
  if (value == null) return "";
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function initials(name) {
  const cleaned = name.replace(/^(The |Mr\.|Ms\.|Dr\.)\s*/i, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

// Avatar: a character image when we have one (with a graceful fall-back to the
// initials tile if the URL is missing or fails to load), otherwise initials.
function avatarHtml(c, cls) {
  const ini = escapeHtml(initials(c.name));
  if (c.image) {
    // If the image 404s / is blocked, swap the <img> for the initials tile.
    const onerr =
      "this.classList.add('img-failed');" +
      "this.parentNode.classList.add('avatar-fallback');" +
      "this.parentNode.textContent='" + ini.replace(/'/g, "") + "';";
    return (
      `<div class="${cls} has-img">` +
      `<img src="${escapeHtml(c.image)}" alt="${escapeHtml(c.name)}" loading="lazy" ` +
      `onerror="${onerr}" /></div>`
    );
  }
  return `<div class="${cls} avatar-fallback">${ini}</div>`;
}

// Split a multi-paragraph string (paragraphs separated by blank lines) into <p>s.
function paragraphsHtml(text) {
  return String(text || "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => `<p>${escapeHtml(p)}</p>`)
    .join("");
}

// "Did You Know?" facts can be a single string (legacy) or an array.
function factsList(c) {
  if (Array.isArray(c.facts)) return c.facts.filter(Boolean);
  return c.facts ? [c.facts] : [];
}

// Stable id from a name — matches the document IDs used by the Firestore seeder.
function slug(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function haystack(c) {
  return [
    c.name, c.alias, c.category, c.firstAppearance,
    (c.teams || []).join(" "),
    (c.actors || []).join(" "),
    (c.films || []).join(" "),
    (c.powers || []).join(" "),
    (c.creators || []).join(" "),
    c.storyline, factsList(c).join(" "),
  ].join(" ").toLowerCase();
}

function matches(c) {
  const inCategory = activeCategory === "All" || c.category === activeCategory;
  const inQuery = !query || haystack(c).includes(query);
  const inFavorites = !favoritesOnly || favorites.has(c._id);
  return inCategory && inQuery && inFavorites;
}

// Comparator for the sort dropdown. Operates on { c } wrappers.
function compareBy(mode) {
  const byName = (a, b) => String(a.c.name).localeCompare(String(b.c.name));
  const byYear = (a, b) => (Number(a.c.created) || 0) - (Number(b.c.created) || 0);
  switch (mode) {
    case "name-desc":
      return (a, b) => byName(b, a);
    case "year-asc":
      return (a, b) => byYear(a, b) || byName(a, b);
    case "year-desc":
      return (a, b) => byYear(b, a) || byName(a, b);
    case "name-asc":
    default:
      return byName;
  }
}

// ---- Filters ---------------------------------------------------------------

function buildFilters() {
  const categories = ["All", ...Array.from(new Set(characters.map((c) => c.category)))];
  const countFor = (cat) =>
    cat === "All" ? characters.length : characters.filter((c) => c.category === cat).length;
  const favChip =
    `<button class="chip chip-fav${favoritesOnly ? " active" : ""}" data-fav="1">` +
    `★ Favourites${currentUser ? ` (${favorites.size})` : ""}</button>`;
  const catChips = categories
    .map(
      (cat) =>
        `<button class="chip${cat === activeCategory && !favoritesOnly ? " active" : ""}" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)} <span class="chip-count">${countFor(cat)}</span></button>`
    )
    .join("");
  els.filters.innerHTML = favChip + catChips;

  els.filters.querySelector("[data-fav]").addEventListener("click", () => {
    if (!currentUser) {
      // Browsing is public, but favourites need an account.
      document.dispatchEvent(new CustomEvent("request-login"));
      return;
    }
    favoritesOnly = !favoritesOnly;
    render();
  });

  els.filters.querySelectorAll("[data-cat]").forEach((chip) => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.cat;
      favoritesOnly = false;
      render();
    });
  });
}

// ---- Cards / grid ----------------------------------------------------------

function favButtonHtml(id, kind) {
  const on = favorites.has(id);
  return (
    `<button class="fav-btn ${kind}${on ? " on" : ""}" data-fav-id="${escapeHtml(id)}" ` +
    `type="button" aria-pressed="${on}" ` +
    `title="${on ? "Remove from favourites" : "Add to favourites"}" ` +
    `aria-label="${on ? "Remove from favourites" : "Add to favourites"}">` +
    `${on ? "♥" : "♡"}</button>`
  );
}

function cardHtml(c, index) {
  const teams = c.teams && c.teams.length ? c.teams[0] : "Unaffiliated";
  return `
    <article class="card" data-index="${index}" tabindex="0" role="button" aria-label="View ${escapeHtml(c.name)}">
      ${favButtonHtml(c._id, "card-fav")}
      <span class="card-year">${escapeHtml(c.created)}</span>
      ${avatarHtml(c, "card-avatar")}
      <h3>${escapeHtml(c.name)}</h3>
      <p class="card-alias">${escapeHtml(c.alias)}</p>
      <div class="card-meta">
        <span class="badge cat-${escapeHtml(c.category)}">${escapeHtml(c.category)}</span>
        <span class="badge">${escapeHtml(teams)}</span>
      </div>
    </article>`;
}

function render() {
  // Rebuild filters so the favourites count / active state stays in sync.
  buildFilters();

  const visible = [];
  characters.forEach((c, i) => {
    if (matches(c)) visible.push({ c, i });
  });
  visible.sort(compareBy(sortBy));

  els.grid.innerHTML = visible.map(({ c, i }) => cardHtml(c, i)).join("");

  if (favoritesOnly && currentUser && favorites.size === 0) {
    els.empty.hidden = true;
    els.grid.innerHTML = "";
    showDataMessage("You haven't favourited any characters yet. Tap the ♡ on a character to save it here.");
  } else {
    els.dataMessage.hidden = true;
    els.empty.hidden = visible.length !== 0 || characters.length === 0;
  }

  els.count.textContent = characters.length
    ? `${visible.length} of ${characters.length} characters`
    : "";

  // Open detail on card click/keyboard.
  els.grid.querySelectorAll(".card").forEach((card) => {
    const open = () => openModal(Number(card.dataset.index));
    card.addEventListener("click", (e) => {
      if (e.target.closest(".fav-btn")) return; // handled separately
      open();
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    });
  });

  // Wire up favourite buttons.
  els.grid.querySelectorAll(".fav-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(btn.dataset.favId);
    });
  });
}

// ---- Detail modal ----------------------------------------------------------

function listHtml(items) {
  return `<ul>${(items || []).map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;
}

function tagListHtml(items) {
  if (!items || !items.length) return `<p>—</p>`;
  return `<ul class="tag-list">${items.map((x) => `<li>${escapeHtml(x)}</li>`).join("")}</ul>`;
}

// Other characters that share at least one team with c (for cross-linking).
function relatedTo(c) {
  const teams = new Set(c.teams || []);
  if (teams.size === 0) return [];
  return characters
    .filter((o) => o._id !== c._id && (o.teams || []).some((t) => teams.has(t)))
    .slice(0, 8);
}

function detailHtml(c) {
  const related = relatedTo(c);
  const relatedSection = related.length
    ? `<div class="detail-section">
         <h4>Related Characters</h4>
         <ul class="tag-list">
           ${related
             .map(
               (r) =>
                 `<li><button class="rel-chip" data-rel-id="${escapeHtml(r._id)}" type="button">${escapeHtml(r.name)}</button></li>`
             )
             .join("")}
         </ul>
       </div>`
    : "";

  return `
    <div class="detail-head">
      ${avatarHtml(c, "detail-avatar")}
      <div class="detail-head-text">
        <h2 id="modal-title">${escapeHtml(c.name)}</h2>
        <p class="detail-alias">${escapeHtml(c.alias)}</p>
      </div>
      ${favButtonHtml(c._id, "detail-fav")}
    </div>

    <div class="detail-badges">
      <span class="badge cat-${escapeHtml(c.category)}">${escapeHtml(c.category)}</span>
      ${(c.teams || [])
        .map(
          (t) =>
            `<button class="badge team-link" data-team="${escapeHtml(t)}" type="button" title="Show ${escapeHtml(t)} characters">${escapeHtml(t)}</button>`
        )
        .join("")}
    </div>

    <div class="detail-section">
      <h4>Storyline</h4>
      <div class="storyline">${paragraphsHtml(c.storyline)}</div>
    </div>

    <div class="detail-grid">
      <div class="kv">
        <div class="kv-label">Created</div>
        <div class="kv-value">${escapeHtml(c.created)}</div>
      </div>
      <div class="kv">
        <div class="kv-label">First Appearance</div>
        <div class="kv-value">${escapeHtml(c.firstAppearance)}</div>
      </div>
    </div>

    <div class="detail-section" style="margin-top:20px">
      <h4>Created By</h4>
      ${tagListHtml(c.creators)}
    </div>

    <div class="detail-section">
      <h4>Powers &amp; Abilities</h4>
      ${listHtml(c.powers)}
    </div>

    <div class="detail-section">
      <h4>Portrayed By</h4>
      ${tagListHtml(c.actors)}
    </div>

    <div class="detail-section">
      <h4>Films &amp; Series</h4>
      ${tagListHtml(c.films)}
    </div>

    ${
      factsList(c).length
        ? `<div class="detail-section"><h4>Did You Know?</h4>${factsList(c)
            .map((f) => `<div class="fact">${escapeHtml(f)}</div>`)
            .join("")}</div>`
        : ""
    }

    ${relatedSection}
  `;
}

// Filter the grid to a team and jump back to the list.
function filterByTeam(team) {
  closeModal();
  activeCategory = "All";
  favoritesOnly = false;
  query = team.toLowerCase();
  els.search.value = team;
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function openModal(index) {
  const c = characters[index];
  if (!c) return;
  els.modalBody.innerHTML = detailHtml(c);
  els.modal.hidden = false;
  els.modal.scrollTop = 0;
  document.body.style.overflow = "hidden";

  // Make the open character shareable via URL + reflect it in the page title.
  history.replaceState(null, "", "#/c/" + encodeURIComponent(c._id));
  document.title = `${c.name} — ${BASE_TITLE}`;

  const favBtn = els.modalBody.querySelector(".fav-btn");
  if (favBtn) {
    favBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(favBtn.dataset.favId);
      // Refresh the modal button state in place.
      const on = favorites.has(favBtn.dataset.favId);
      favBtn.classList.toggle("on", on);
      favBtn.textContent = on ? "♥" : "♡";
      favBtn.setAttribute("aria-pressed", String(on));
    });
  }

  // Clicking a team badge filters the grid to that team.
  els.modalBody.querySelectorAll(".team-link").forEach((btn) => {
    btn.addEventListener("click", () => filterByTeam(btn.dataset.team));
  });

  // Clicking a related character opens that character's detail.
  els.modalBody.querySelectorAll(".rel-chip").forEach((btn) => {
    btn.addEventListener("click", () => openById(btn.dataset.relId));
  });
}

function closeModal() {
  els.modal.hidden = true;
  document.body.style.overflow = "";
  document.title = BASE_TITLE;
  if (location.hash.startsWith("#/c/")) {
    history.replaceState(null, "", location.pathname + location.search);
  }
}

function openById(id) {
  const index = characters.findIndex((c) => c._id === id);
  if (index >= 0) openModal(index);
}

els.modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !els.modal.hidden) closeModal();
});

// ---- Primary views (Characters / Creation / Films) -------------------------

let currentView = "characters";

function setView(view) {
  if (!els.views[view]) view = "characters";
  currentView = view;
  Object.entries(els.views).forEach(([name, el]) => {
    el.hidden = name !== view;
  });
  els.primaryNav.querySelectorAll(".nav-tab").forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.view === view);
  });
  // Search/sort + filter chips only make sense on the Characters view.
  const charOnly = view === "characters";
  els.charControls.hidden = !charOnly;
  els.filters.hidden = !charOnly;
  document.title = charOnly
    ? BASE_TITLE
    : `${view.charAt(0).toUpperCase()}${view.slice(1)} — ${BASE_TITLE}`;
  if (view !== "characters" && !els.modal.hidden) closeModal();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Central hash router. Our own modal opens use replaceState (no hashchange),
// so this only fires for shared links, nav clicks and manual navigation.
function route() {
  const hash = location.hash;
  const charMatch = hash.match(/^#\/c\/(.+)$/);
  if (charMatch) {
    setView("characters");
    openById(decodeURIComponent(charMatch[1]));
  } else if (hash === "#/creation") {
    setView("creation");
  } else if (hash === "#/films") {
    setView("films");
  } else {
    setView("characters");
    if (!els.modal.hidden) closeModal();
  }
}

els.primaryNav.querySelectorAll(".nav-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    const view = tab.dataset.view;
    location.hash = view === "characters" ? "#/characters" : "#/" + view;
  });
});

window.addEventListener("hashchange", route);

// ---- Creation & Films content ----------------------------------------------

function renderCreation() {
  const sections = window.MARVEL_CREATION || [];
  if (!sections.length) {
    els.creationBody.innerHTML = "<p class='muted'>Creation history is unavailable.</p>";
    return;
  }
  els.creationBody.innerHTML = sections
    .map(
      (s) =>
        `<section class="article-section">
           <h2>${escapeHtml(s.heading)}</h2>
           ${(s.paragraphs || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
         </section>`
    )
    .join("");
}

function renderFilms() {
  const films = window.MARVEL_FILMS || [];
  if (!films.length) {
    els.filmsBody.innerHTML = "<p class='muted'>Film data is unavailable.</p>";
    return;
  }

  // Phase filter chips.
  const phases = ["All", ...Array.from(new Set(films.map((f) => f.phase).filter(Boolean)))];
  els.filmsToolbar.innerHTML = phases
    .map(
      (p, i) =>
        `<button class="chip film-chip${i === 0 ? " active" : ""}" data-phase="${escapeHtml(p)}">${escapeHtml(p)}</button>`
    )
    .join("");
  els.filmsToolbar.querySelectorAll("[data-phase]").forEach((chip) => {
    chip.addEventListener("click", () => {
      const phase = chip.dataset.phase;
      els.filmsToolbar.querySelectorAll(".film-chip").forEach((c) => c.classList.toggle("active", c === chip));
      els.filmsBody.querySelectorAll(".film-card").forEach((card) => {
        card.hidden = phase !== "All" && card.dataset.phase !== phase;
      });
    });
  });

  els.filmsBody.innerHTML = films
    .map(
      (f) => `
      <article class="film-card" data-phase="${escapeHtml(f.phase || "")}">
        <div class="film-head">
          <h2>${escapeHtml(f.title)}</h2>
          <span class="film-year">${escapeHtml(f.year)}</span>
        </div>
        <div class="film-badges">
          ${f.phase ? `<span class="badge film-phase">${escapeHtml(f.phase)}</span>` : ""}
          ${f.director ? `<span class="badge">Dir. ${escapeHtml(f.director)}</span>` : ""}
          ${f.boxOffice && f.boxOffice !== "—" ? `<span class="badge">${escapeHtml(f.boxOffice)}</span>` : ""}
        </div>
        <div class="film-synopsis">${paragraphsHtml(f.synopsis)}</div>
        ${
          (f.cast || []).length
            ? `<div class="film-block"><h4>Cast</h4>${tagListHtml(f.cast)}</div>`
            : ""
        }
        ${
          (f.trivia || []).length
            ? `<div class="film-block"><h4>Did You Know?</h4>${f.trivia
                .map((t) => `<div class="fact">${escapeHtml(t)}</div>`)
                .join("")}</div>`
            : ""
        }
      </article>`
    )
    .join("");
}

// ---- Search ----------------------------------------------------------------

els.search.addEventListener("input", (e) => {
  query = e.target.value.trim().toLowerCase();
  render();
});

els.sort.addEventListener("change", (e) => {
  sortBy = e.target.value;
  render();
});

// ---- Favourites (per-user, stored in Firestore) ---------------------------

function userDocRef() {
  return doc(db, "users", currentUser.uid);
}

async function loadFavorites() {
  favorites = new Set();
  if (!currentUser) return;
  if (!useFirebase) {
    favorites = new Set(localAuth.getFavorites(currentUser.uid));
    return;
  }
  try {
    const snap = await getDoc(userDocRef());
    const ids = (snap.exists() && snap.data().favorites) || [];
    favorites = new Set(ids);
  } catch (err) {
    console.warn("Could not load favourites:", err.code || err.message);
  }
}

async function toggleFavorite(id) {
  if (!currentUser) {
    document.dispatchEvent(new CustomEvent("request-login"));
    return;
  }
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);

  // Re-render immediately for responsiveness; persist in the background.
  render();
  if (!useFirebase) {
    localAuth.setFavorites(currentUser.uid, Array.from(favorites));
    return;
  }
  try {
    await setDoc(userDocRef(), { favorites: Array.from(favorites) }, { merge: true });
  } catch (err) {
    console.warn("Could not save favourites:", err.code || err.message);
  }
}

// Called by auth.js whenever the signed-in user changes (or signs out).
export async function setUser(user) {
  currentUser = user || null;
  if (!currentUser) {
    favorites = new Set();
    favoritesOnly = false;
  } else {
    await loadFavorites();
  }
  if (characters.length) render();
}

// ---- Data loading (public) -------------------------------------------------

function showDataMessage(html) {
  els.dataMessage.innerHTML = html;
  els.dataMessage.hidden = false;
}

function showNotice(html) {
  if (!html) {
    els.notice.hidden = true;
    return;
  }
  els.notice.innerHTML = html;
  els.notice.hidden = false;
}

let contentRendered = false;
function finish() {
  render();
  if (!contentRendered) {
    renderCreation();
    renderFilms();
    contentRendered = true;
  }
  // Honour the URL hash: open a shared character, or a Creation/Films deep link.
  route();
}

// Use the dataset bundled with the page (data.js) — keeps the wiki working
// offline / before Firebase is set up.
function loadLocal() {
  const local = window.MARVEL_CHARACTERS || [];
  characters = local
    .map((c) => ({ _id: slug(c.name), ...c }))
    .sort((a, b) => String(a.name).localeCompare(String(b.name)));
  return characters.length > 0;
}

async function initWiki() {
  // No Firebase config → run entirely on the bundled dataset.
  if (!isConfigured) {
    if (loadLocal()) {
      finish();
      showNotice(
        "Showing the built-in character set, with sign-in &amp; favourites stored locally " +
          "in your browser. Configure Firebase in <code>public/firebase-config.js</code> for " +
          "live data and cloud-synced accounts (see README)."
      );
    } else {
      showDataMessage("<strong>No character data found.</strong>");
    }
    return;
  }

  els.count.textContent = "Loading characters…";
  els.dataMessage.hidden = true;
  try {
    let snap;
    try {
      snap = await getDocs(fsQuery(collection(db, "characters"), orderBy("name")));
    } catch (_) {
      snap = await getDocs(collection(db, "characters"));
    }
    characters = snap.docs.map((d) => ({ _id: d.id, ...d.data() }));
    characters.sort((a, b) => String(a.name).localeCompare(String(b.name)));
  } catch (err) {
    // Firestore unreachable / rules block reads → fall back to bundled data.
    if (loadLocal()) {
      finish();
      showNotice(
        "Couldn't reach Firestore — showing the built-in character set. " +
          `(${escapeHtml(err.code || err.message)})`
      );
    } else {
      els.count.textContent = "";
      showDataMessage(
        "<strong>Couldn't load characters from Firestore.</strong><br />" +
          "Check your Firestore rules allow public reads of the <code>characters</code> " +
          `collection. (${escapeHtml(err.code || err.message)})`
      );
    }
    return;
  }

  // Firestore reachable but empty → use bundled data and point to the seeder.
  if (characters.length === 0) {
    if (loadLocal()) {
      finish();
      showNotice(
        'Showing the built-in character set. Open <a href="seed.html">seed.html</a> ' +
          "(sign in first) to upload it to Firestore for live editing."
      );
    } else {
      els.count.textContent = "";
      showDataMessage(
        "<strong>No characters in Firestore yet.</strong><br />" +
          'Open <a href="seed.html">seed.html</a> (sign in first) to upload the starter dataset.'
      );
    }
    return;
  }

  showNotice("");
  finish();
}

// Load the public wiki immediately on page load.
initWiki();
