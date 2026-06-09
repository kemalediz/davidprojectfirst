# Marvelpedia — The Marvel Characters Wiki

A fan-made wiki of iconic Marvel characters, backed by **Firebase**. Users sign
in (Firebase Authentication), and the character data is stored in and loaded
from **Cloud Firestore**. For each character it documents:

- **When they were created** — year and first comic appearance
- **Who created them** — writers and artists
- **Which films/series they appear in**
- **Which actor(s) played them**
- **Their powers and abilities**
- **Their storyline** plus a fun "Did You Know?" fact

The site has live search (by name, alias, actor, power, film, team or creator)
and category filters (Hero / Villain / Anti-Hero). Click any character card to
open a full detail view.

It's plain HTML/CSS/JS with no build step — it uses the Firebase **modular SDK
loaded over the CDN** as ES modules.

## Setup

### 1. Create a Firebase project

1. In the [Firebase console](https://console.firebase.google.com/), create a
   project and add a **Web app**. Copy the config object.
2. **Authentication** → Sign-in method → enable **Email/Password**.
3. **Firestore Database** → create a database.
4. Apply security rules. The included `firestore.rules` lets any signed-in user
   read and seed the data:

   ```
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /characters/{characterId} {
         allow read: if request.auth != null;
         allow write: if request.auth != null;  // tighten before real use
       }
     }
   }
   ```

### 2. Add your config

Open `public/firebase-config.js` and replace the placeholder values with your
project's config. (The web `apiKey` is not a secret — access is controlled by
Auth and the Firestore rules.)

### 3. Run it

ES modules require a server (opening `index.html` via `file://` won't work).
Use the included dependency-free Python static server:

```bash
python3 backend.py            # serves on http://localhost:8000
python3 backend.py 3000       # or choose a port
```

Then open the URL, create an account, and sign in.

### 4. Seed Firestore (first run only)

The wiki loads characters from the `characters` collection. To populate it,
sign in, then open **`/seed.html`** and click **Upload starter dataset** — it
uploads the bundled roster from `public/data.js` into Firestore. Return to the
wiki and the characters appear.

## Project structure

```
public/
  index.html          # auth gate + wiki shell
  styles.css          # Marvel-themed styling
  firebase-config.js  # Firebase init (fill in your project config)
  auth.js             # sign-in / sign-up gate (Firebase Auth)
  app.js              # loads characters from Firestore, search/filter/modal
  data.js             # starter dataset (used only by the seeder)
  seed.html / seed.js # one-click uploader: data.js → Firestore
backend.py            # minimal static file server
firestore.rules       # Firestore security rules
```

## Adding more characters

Either edit the documents directly in the Firestore console, or append a new
object to `public/data.js` and re-run `/seed.html` (the seeder uses the
character name as a stable document ID, so re-seeding updates existing entries
rather than duplicating them). Each character document has this shape:

```js
{
  name: "Character Name",
  alias: "Real Name",
  teams: ["Avengers"],
  category: "Hero",            // Hero | Villain | Anti-Hero
  created: 1963,
  firstAppearance: "Comic Title #1 (1963)",
  creators: ["Stan Lee", "Jack Kirby"],
  actors: ["Actor Name"],
  films: ["Film (Year)"],
  powers: ["Power one", "Power two"],
  storyline: "A short summary of their story.",
  facts: "An interesting trivia note."
}
```

## Notes

- Marvel has thousands of characters; the starter dataset is a curated set of
  the most prominent ones.
- Marvel and all character names are trademarks of Marvel Characters, Inc. This
  is an educational fan project, not affiliated with or endorsed by Marvel.
