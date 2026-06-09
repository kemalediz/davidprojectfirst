// One-time seeder: uploads the starter character dataset (window.MARVEL_CHARACTERS
// from data.js) into the Firestore "characters" collection. Must be run while
// signed in, and your Firestore rules must allow authenticated writes.

import { auth, db, isConfigured } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  doc,
  writeBatch,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const statusEl = document.getElementById("seed-status");
const btn = document.getElementById("seed-btn");

function setStatus(text, kind) {
  statusEl.textContent = text;
  statusEl.className = "message" + (kind ? " " + kind : "");
}

// Stable, human-readable document IDs so re-running updates rather than dupes.
function slug(name) {
  return String(name)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

if (!isConfigured) {
  setStatus("Firebase isn't configured. Fill in public/firebase-config.js first.", "error");
} else {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const data = window.MARVEL_CHARACTERS || [];
      setStatus(`Signed in as ${user.email}. Ready to upload ${data.length} characters.`, "success");
      btn.disabled = false;
    } else {
      setStatus("Not signed in. Open the wiki and sign in, then come back.", "error");
      btn.disabled = true;
    }
  });
}

btn.addEventListener("click", async () => {
  const data = window.MARVEL_CHARACTERS || [];
  if (!data.length) {
    setStatus("No characters found in data.js.", "error");
    return;
  }

  btn.disabled = true;
  setStatus(`Uploading ${data.length} characters…`, "");

  try {
    // Firestore batches are capped at 500 writes; chunk to be safe.
    const chunkSize = 400;
    for (let start = 0; start < data.length; start += chunkSize) {
      const batch = writeBatch(db);
      data.slice(start, start + chunkSize).forEach((c) => {
        batch.set(doc(db, "characters", slug(c.name)), c);
      });
      await batch.commit();
    }
    setStatus(`Done! Uploaded ${data.length} characters. You can return to the wiki.`, "success");
  } catch (err) {
    setStatus(`Upload failed: ${err.code || err.message}. Check your Firestore write rules.`, "error");
    btn.disabled = false;
  }
});
