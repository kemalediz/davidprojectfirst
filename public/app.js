// Marvelpedia wiki UI — loads characters from Cloud Firestore and renders a
// searchable, filterable grid with a detail modal. Exposed as initWiki(), which
// auth.js calls once a user is signed in.

import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  query as fsQuery,
  orderBy,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const els = {
  grid: document.getElementById("grid"),
  filters: document.getElementById("filters"),
  search: document.getElementById("search"),
  count: document.getElementById("result-count"),
  empty: document.getElementById("empty"),
  dataMessage: document.getElementById("data-message"),
  modal: document.getElementById("modal"),
  modalBody: document.getElementById("modal-body"),
};

let characters = [];
let activeCategory = "All";
let query = "";

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
  return inCategory && inQuery;
}

// ---- Filters ---------------------------------------------------------------

function buildFilters() {
  const categories = ["All", ...Array.from(new Set(characters.map((c) => c.category)))];
  els.filters.innerHTML = categories
    .map(
      (cat) =>
        `<button class="chip${cat === activeCategory ? " active" : ""}" data-cat="${escapeHtml(cat)}">${escapeHtml(cat)}</button>`
    )
    .join("");

  els.filters.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      activeCategory = chip.dataset.cat;
      els.filters.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      render();
    });
  });
}

// ---- Cards / grid ----------------------------------------------------------

function cardHtml(c, index) {
  const teams = c.teams && c.teams.length ? c.teams[0] : "Unaffiliated";
  return `
    <article class="card" data-index="${index}" tabindex="0" role="button" aria-label="View ${escapeHtml(c.name)}">
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
  const visible = [];
  characters.forEach((c, i) => {
    if (matches(c)) visible.push({ c, i });
  });

  els.grid.innerHTML = visible.map(({ c, i }) => cardHtml(c, i)).join("");
  els.empty.hidden = visible.length !== 0 || characters.length === 0;
  els.count.textContent = characters.length
    ? `${visible.length} of ${characters.length} characters`
    : "";

  els.grid.querySelectorAll(".card").forEach((card) => {
    const open = () => openModal(Number(card.dataset.index));
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
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

function detailHtml(c) {
  return `
    <div class="detail-head">
      <div class="detail-avatar">${escapeHtml(initials(c.name))}</div>
      <div>
        <h2 id="modal-title">${escapeHtml(c.name)}</h2>
        <p class="detail-alias">${escapeHtml(c.alias)}</p>
      </div>
    </div>

    <div class="detail-badges">
      <span class="badge cat-${escapeHtml(c.category)}">${escapeHtml(c.category)}</span>
      ${(c.teams || []).map((t) => `<span class="badge">${escapeHtml(t)}</span>`).join("")}
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
  `;
}

function openModal(index) {
  const c = characters[index];
  if (!c) return;
  els.modalBody.innerHTML = detailHtml(c);
  els.modal.hidden = false;
  els.modal.scrollTop = 0;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  els.modal.hidden = true;
  document.body.style.overflow = "";
}

els.modal.querySelectorAll("[data-close]").forEach((el) => el.addEventListener("click", closeModal));
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !els.modal.hidden) closeModal();
});

// ---- Search ----------------------------------------------------------------

els.search.addEventListener("input", (e) => {
  query = e.target.value.trim().toLowerCase();
  render();
});

// ---- Data loading ----------------------------------------------------------

function showDataMessage(html) {
  els.dataMessage.innerHTML = html;
  els.dataMessage.hidden = false;
}

// Called by auth.js once the user is authenticated.
export async function initWiki() {
  els.count.textContent = "Loading characters…";
  els.dataMessage.hidden = true;
  try {
    const snap = await getDocs(fsQuery(collection(db, "characters"), orderBy("name")));
    characters = snap.docs.map((d) => d.data());
  } catch (err) {
    // Most commonly: no "name" index yet, or rules deny reads. Fall back to an
    // unordered fetch, then sort client-side.
    try {
      const snap = await getDocs(collection(db, "characters"));
      characters = snap.docs.map((d) => d.data());
      characters.sort((a, b) => String(a.name).localeCompare(String(b.name)));
    } catch (err2) {
      els.count.textContent = "";
      showDataMessage(
        `<strong>Couldn't load characters from Firestore.</strong><br />` +
          `Check your Firestore security rules allow signed-in reads of the ` +
          `<code>characters</code> collection. (${escapeHtml(err2.code || err2.message)})`
      );
      return;
    }
  }

  if (characters.length === 0) {
    els.count.textContent = "";
    showDataMessage(
      `<strong>No characters in Firestore yet.</strong><br />` +
        `Open <a href="seed.html">seed.html</a> while signed in to upload the ` +
        `starter dataset, then return here.`
    );
    return;
  }

  buildFilters();
  render();
}
