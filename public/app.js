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

const els = {
  grid: document.getElementById("grid"),
  filters: document.getElementById("filters"),
  search: document.getElementById("search"),
  sort: document.getElementById("sort"),
  count: document.getElementById("result-count"),
  empty: document.getElementById("empty"),
  dataMessage: document.getElementById("data-message"),
  modal: document.getElementById("modal"),
  modalBody: document.getElementById("modal-body"),
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

function haystack(c) {
  return [
    c.name, c.alias, c.category, c.firstAppearance,
    (c.teams || []).join(" "),
    (c.actors || []).join(" "),
    (c.films || []).join(" "),
    (c.powers || []).join(" "),
    (c.creators || []).join(" "),
    c.storyline, c.facts,
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
      <div class="card-avatar">${escapeHtml(initials(c.name))}</div>
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
      <div class="detail-avatar">${escapeHtml(initials(c.name))}</div>
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
      <p>${escapeHtml(c.storyline)}</p>
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

    ${c.facts ? `<div class="detail-section"><h4>Did You Know?</h4><div class="fact">${escapeHtml(c.facts)}</div></div>` : ""}

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

// Open the character named in the URL hash (#/c/<id>), if any.
function openFromHash() {
  const m = location.hash.match(/^#\/c\/(.+)$/);
  if (m) openById(decodeURIComponent(m[1]));
  else if (!els.modal.hidden) closeModal();
}

els.modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !els.modal.hidden) closeModal();
});
// React to shared links / manual hash navigation (our own opens use replaceState,
// which doesn't fire this event, so there's no loop).
window.addEventListener("hashchange", openFromHash);

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

async function initWiki() {
  if (!isConfigured) {
    showDataMessage(
      "<strong>Firebase isn't configured yet.</strong><br />" +
        "Add your project config in <code>public/firebase-config.js</code> (see README)."
    );
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
    els.count.textContent = "";
    showDataMessage(
      "<strong>Couldn't load characters from Firestore.</strong><br />" +
        "Check your Firestore rules allow public reads of the <code>characters</code> " +
        `collection. (${escapeHtml(err.code || err.message)})`
    );
    return;
  }

  if (characters.length === 0) {
    els.count.textContent = "";
    showDataMessage(
      "<strong>No characters in Firestore yet.</strong><br />" +
        'Open <a href="seed.html">seed.html</a> (sign in first) to upload the ' +
        "starter dataset, then reload this page."
    );
    return;
  }

  render();
  // If the page was opened with a #/c/<id> link, show that character.
  openFromHash();
}

// Load the public wiki immediately on page load.
initWiki();
