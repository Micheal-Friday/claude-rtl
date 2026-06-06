# Claude RTL — Persian & Arabic support for claude.ai

A small browser extension that makes **Persian/Arabic** text on
[claude.ai](https://claude.ai) render **right-to-left** automatically, while
keeping code blocks and math (equations) **left-to-right**. It adds a toolbar
popup with an on/off toggle.

> Unofficial, independent project. Not affiliated with or endorsed by Anthropic.

## Features

- Per-paragraph direction via the browser's native bidi algorithm (`dir="auto"`),
  so mixed English/Persian conversations Just Work — each block picks its own
  direction from its first strong character.
- **Code stays LTR** — `pre`, `code`, `kbd`, `samp` are never flipped.
- **Math stays LTR** — KaTeX/MathML is isolated so an equation like `p = mg`
  is no longer reordered to `mg = p` inside an RTL line.
- **Toolbar toggle** — turn it on/off per the open tab; state is saved in
  `storage.local`. Turning it off cleanly reverts every change.
- Works while Claude streams responses (mutations are batched per frame).

## Repository layout

```
.
├── firefox/   # Manifest V2 build (SVG icon)  → addons.mozilla.org
└── chrome/    # Manifest V3 build (PNG icons)  → Chrome / Edge / Brave
```

The two builds share identical `content.js`, `styles.css`, and popup files;
only the `manifest.json` and icon format differ per store requirements.

## Install (from source, unpacked)

### Firefox
1. Open `about:debugging#/runtime/this-firefox`.
2. **Load Temporary Add-on…** → select `firefox/manifest.json`.

### Chrome / Edge / Brave
1. Open `chrome://extensions` (Edge: `edge://extensions`).
2. Enable **Developer mode**.
3. **Load unpacked** → select the `chrome/` folder.

Then open **claude.ai** and click the **اA** toolbar icon to toggle RTL.

## Build (package for the stores)

Requires [Node.js](https://nodejs.org/) ≥ 18 (includes npm). Uses Mozilla's
[`web-ext`](https://github.com/mozilla/web-ext); there is no transpilation or
minification — source files are shipped verbatim.

```sh
npm install
npm run lint:firefox     # validate the Firefox build (0 errors expected)
npm run build:firefox    # → dist/ packaged Firefox zip
npm run build:chrome     # → dist/ packaged Chrome zip
```

## License

[MIT](LICENSE)
