# Session Notes — Marvelpedia (Marvel Characters Wiki)

Handoff document for continuing this project in a new session (e.g. from a local
laptop checkout). Captures what was built, how it works, how to run/deploy it,
known limitations, and next steps.

- **Repo:** `kemalediz/davidprojectfirst`
- **Working branch:** `claude/marvel-characters-wiki-06lwi7`
- **Last known good commit:** see `git log` (most recent on the branch)

## How to get this branch locally

```bash
git clone https://github.com/kemalediz/davidprojectfirst.git
cd davidprojectfirst
git checkout claude/marvel-characters-wiki-06lwi7
python3 backend.py        # serves on http://localhost:8000
```

No build step, no dependencies. The wiki works immediately on the bundled
dataset; Firebase is optional (see below).

---

## What this project is

A fan-made, Wikipedia-style wiki of Marvel characters. Each character documents:
creation year + first appearance, creators, films/series, actor(s), powers,
storyline, and a trivia fact.

It started as an Airtable auth demo and was fully repurposed. Airtable was
removed (including a hardcoded token — see "Security note" below).

## Current feature set

- **Public browsing** — anyone can read all characters and full details with no
  login (like Wikipedia).
- **106 characters** in `public/data.js`, spanning Avengers, X-Men, Guardians,
  Eternals, Defenders, Fantastic Four, villains and key supporting cast.
- **Search** across name, alias, actor, power, film, team, creator.
- **Category filters** (Hero / Villain / Anti-Hero) with per-category counts.
- **Sorting**: Name A–Z / Z–A, Created oldest / newest.
- **Detail modal** per character.
- **Shareable deep links**: `#/c/<id>` (e.g. `#/c/iron-man`) opens that
  character on load; page `<title>` updates to match.
- **Cross-linking**: clickable team badges filter the grid; "Related Characters"
  links between entries sharing a team.
- **Firebase (optional)**:
  - **Firestore** as the live data source (`characters` collection).
  - **Auth** (Google + email/password) — optional, only gates **favourites**.
  - **Per-user favourites** stored at `users/{uid}.favorites` (array of ids);
    ♥ toggles on cards + detail, plus a "★ Favourites" filter chip.
- **Zero-config fallback**: if Firebase isn't configured, or Firestore is
  unreachable/empty, the app automatically uses the bundled `data.js`. A blue
  notice bar indicates when the built-in set is in use.
- **Firebase Hosting** ready: `firebase.json` + `.firebaserc`.

## File map

```
public/
  index.html          # markup: header (search/sort/auth), grid, detail modal, login modal
  styles.css          # Marvel-red theme, responsive
  data.js             # window.MARVEL_CHARACTERS — the 106-character dataset (seed + fallback)
  firebase-config.js  # Firebase init + exports {app, auth, db, isConfigured}; PLACEHOLDER config
  auth.js             # module entry; optional login modal; onAuthStateChanged -> app.setUser()
  app.js              # wiki: load (Firestore or local), render, search/filter/sort, modal,
                      #   deep links, favourites; exports setUser()
  seed.html / seed.js # one-click uploader: data.js -> Firestore (requires sign-in)
backend.py            # minimal stdlib static server (local dev); takes optional port arg
firestore.rules       # public read of characters; per-user read/write of users/{uid}
firebase.json         # Hosting (serves public/) + Firestore rules deploy config
.firebaserc           # default project = "YOUR_PROJECT_ID" (placeholder — set this)
README.md             # user-facing docs
SESSION_NOTES.md      # this file
```

### How the JS modules connect

- `index.html` loads `data.js` (classic script, sets `window.MARVEL_CHARACTERS`)
  then `auth.js` (`type="module"`).
- `auth.js` imports `setUser` from `app.js`; `app.js` runs `initWiki()` on load.
- They communicate via `setUser(user)` (auth → app) and a `request-login`
  CustomEvent (app → auth, e.g. when a signed-out user taps a favourite).
- App's own modal opens use `history.replaceState` (no `hashchange` loop);
  `hashchange` is only handled for shared/manual navigation.

## Character data schema (`public/data.js`)

```js
{
  name: "Iron Man",
  alias: "Tony Stark",
  teams: ["Avengers"],          // first team shown on card; all shown in detail
  category: "Hero",             // Hero | Villain | Anti-Hero
  created: 1963,                // year (number) — used for "Created" sort
  firstAppearance: "Tales of Suspense #39 (1963)",
  creators: ["Stan Lee", "..."],
  actors: ["Robert Downey Jr."],
  films: ["Iron Man (2008)", "..."],
  powers: ["...", "..."],
  storyline: "…",
  facts: "…"                    // optional "Did You Know?"
}
```

Document id used in Firestore / deep links = slug of `name`
(lowercase, non-alphanumerics → `-`). The seeder and the local fallback both
use this same slug, so favourites/links stay consistent across modes.

---

## Firebase setup (optional — adds live data + favourites)

1. Firebase console → create project → add a **Web app**, copy the config.
2. **Authentication → Sign-in method**: enable **Email/Password** and **Google**.
3. **Firestore Database**: create it.
4. Paste your config into `public/firebase-config.js` (replace the
   `YOUR_*` placeholders). The web `apiKey` is not a secret.
5. Apply `firestore.rules`.
6. Run the app, sign in, open `/seed.html`, click **Upload starter dataset** to
   populate the `characters` collection. Re-run after editing `data.js`.

## Deploy to Firebase Hosting

> Not done in the cloud session — `firebase` CLI / deploy token weren't
> available, and `.firebaserc` is a placeholder. Run on a machine with access:

```bash
npm install -g firebase-tools
firebase login
firebase use --add          # pick your project (writes .firebaserc)
firebase deploy             # hosting + firestore rules
```

---

## Important caveats / security note

- **Rotate the old Airtable token.** The original commit `86971fd` ("david's
  first project") contained a hardcoded Airtable PAT in `backend.py`. It was
  removed from the working tree, but it still exists in git history. If that
  token is real, **revoke/rotate it in Airtable** — removing it from later
  commits does not purge it from history.
- **Firestore write rule is permissive**: any signed-in user can write
  `characters` (needed for the browser seeder). Tighten to a specific admin uid
  before any real-world/public deployment.
- **ES modules need HTTP** — open via `backend.py` or Hosting, not `file://`.
- The live **auth / Firestore / deploy** paths were verified by syntax +
  static-serve checks only (no real Firebase project available in-session).
  Local browsing was verifiable via the bundled-data fallback.

## Suggested next steps (not yet done)

- Open a PR for the branch and/or merge to `main`.
- Expand the roster further (toward 120+).
- Accessibility pass: focus-trap + ARIA on the detail/login modals.
- Optional polish: a hero banner; a favourites count badge in the header.
- Consider real character images (would need hosting/licensing; currently uses
  initials avatars to avoid copyright issues).

## Session history (high-level)

1. Replaced Airtable auth demo with a static Marvel wiki (56 characters);
   removed Airtable + token; added a stdlib static server.
2. Added Firebase: Firestore data source + auth gate + seeder.
3. Added Firebase Hosting config + Google sign-in.
4. Reworked auth from a gate into **optional** login; made browsing public;
   added **per-user favourites**; expanded to 70.
5. Added sorting + shareable deep links; expanded to 84.
6. Added cross-linking (clickable teams + related characters); expanded to 96.
7. Added category counts on chips; expanded to 106.
8. Added zero-config bundled-data fallback so the wiki works without Firebase.
