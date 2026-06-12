# Next Steps — continue on Mac

Quick handoff checklist for picking this project up locally. Full detail lives
in `SESSION_NOTES.md`; this file is just the short list of what's left to do by
hand (the automation/cloud session couldn't do these).

## Status

- ✅ Project named **`marvelpedia`** (`package.json`).
- ✅ Wiki work merged to `main` (via PR).
- ✅ Working branch pushed: `claude/marvel-characters-wiki-06lwi7`.
- ⏳ GitHub repo still named `davidprojectfirst` — rename + org/folder move are manual.

## 1. Get it on your Mac

```bash
git clone https://github.com/kemalediz/davidprojectfirst.git
cd davidprojectfirst
git checkout main            # or the working branch below
python3 backend.py           # serves http://localhost:8000  (no deps, no build)
```

Working branch (if you want the latest unmerged work):
`git checkout claude/marvel-characters-wiki-06lwi7`

## 2. Rename the GitHub repo → `marvelpedia`

GitHub repo → **Settings → Rename** → `marvelpedia`.
GitHub auto-redirects old URLs, but update your local remote afterwards:

```bash
git remote set-url origin https://github.com/<owner>/marvelpedia.git
```

## 3. Move under Cressoft (pick one)

- **GitHub org transfer** → Settings → **Transfer ownership** → `Cressoft`
  (you must be a Cressoft org owner/admin).
- **Just a local folder** → clone into your Cressoft projects dir:
  `git clone <url> ~/Projects/Cressoft/marvelpedia`

## 4. (Optional) Firebase live data + favourites

See `SESSION_NOTES.md → "Firebase setup"`. The app works without it via the
bundled `public/data.js` fallback, so this is optional.

## 5. (Optional) Deploy to Firebase Hosting

Needs the `firebase` CLI + your project (not available in the cloud session):

```bash
npm install -g firebase-tools
firebase login
firebase use --add     # writes .firebaserc (currently a placeholder)
firebase deploy        # hosting + firestore rules
```

## ⚠️ Security — do this regardless

Rotate the old **Airtable token**. The original commit `86971fd` had a hardcoded
Airtable PAT in `backend.py`. It's removed from the working tree but still in git
history. If real, **revoke/rotate it in Airtable**.
