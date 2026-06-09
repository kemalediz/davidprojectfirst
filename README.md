# Marvelpedia — The Marvel Characters Wiki

A fan-made, fully static wiki of iconic Marvel characters. For each character it
documents:

- **When they were created** — year and first comic appearance
- **Who created them** — writers and artists
- **Which films/series they appear in**
- **Which actor(s) played them**
- **Their powers and abilities**
- **Their storyline** plus a fun "Did You Know?" fact

The site has live search (by name, alias, actor, power, film, team or creator)
and category filters (Hero / Villain / Anti-Hero). Click any character card to
open a full detail view.

## Run it

No build step and no dependencies — it's plain HTML, CSS and JavaScript.

Open `public/index.html` directly in a browser, **or** serve it with the
included minimal Python static server (standard library only):

```bash
python3 backend.py            # serves on http://localhost:8000
python3 backend.py 3000       # or choose a port
```

## Project structure

```
public/
  index.html   # page shell
  styles.css   # Marvel-themed styling
  app.js       # search, filtering and the detail modal
  data.js      # the character dataset (window.MARVEL_CHARACTERS)
backend.py     # optional static file server
```

## Adding more characters

Append a new object to the array in `public/data.js`. Marvel has thousands of
characters; this is a curated set of the most prominent ones, and the schema is
designed so new entries can be added without touching any other code:

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

- Everything runs client-side. There is no backend database and no third-party
  services or API keys.
- Marvel and all character names are trademarks of Marvel Characters, Inc. This
  is an educational fan project, not affiliated with or endorsed by Marvel.
