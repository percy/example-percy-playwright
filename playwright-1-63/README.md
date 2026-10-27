# Percy + Playwright 1.63: component stories and WebP screenshot names

Two Playwright 1.63 examples:

| Spec | What it shows |
|---|---|
| [`tests/stories/components.spec.js`](./tests/stories/components.spec.js) | `percySnapshot(component)` on components mounted with Playwright's built-in `mount` fixture |
| [`tests/dropin/hero.spec.js`](./tests/dropin/hero.spec.js) | `toHaveScreenshot('hero.webp')` routed through Percy by the drop-in |

> **Needs `@percy/playwright` 1.2.0-beta.0 or newer.** `package.json` pins the current release
> (1.1.2), which doesn't have `percyTest` or Locator snapshots, and whose drop-in can't be imported
> from an ES module config. Install the beta to run these examples:
>
> ```bash
> npm install --save-dev @percy/playwright@1.2.0-beta.0
> ```
>
> These specs aren't part of the repo's CI run.

## Setup

```bash
cd playwright-1-63
npm install
npx playwright install chromium
export PERCY_TOKEN=<your token>
```

`playwright.config.mjs` starts a Vite dev server on port 8020 (set `GALLERY_PORT` to change it).

## Component stories

```bash
npm run test:stories
```

Playwright 1.63's `mount` fixture opens the `baseURL` page, the story gallery in
[`gallery/`](./gallery), and calls its `window.mount({ story, props })`. The gallery renders
the story into `#root`. A story id is the file's path under `src/` plus the export name, so
`src/components/Button.story.jsx` → `Primary` is `components/Button/Primary`.

Wrapping `test` with `percyTest` lets `percySnapshot` take the mounted component:

```js
import { test as base } from '@playwright/test';
import percySnapshot, { percyTest } from '@percy/playwright';

const test = percyTest(base);

test('button', async ({ mount }) => {
  const button = await mount('components/Button/Primary');
  await percySnapshot(button); // named "components/Button/Primary", scoped to #root
});
```

- Without a name, the snapshot is named after the story id. A name you pass wins.
- The snapshot is scoped to the component, so the gallery header is left out. A `scope` you pass wins.
- Regions work on scoped snapshots; the card story ignores its timestamp.

## WebP screenshot names

```bash
npm run test:dropin
```

The config imports the drop-in, so `expect(...).toHaveScreenshot()` is sent to Percy under
`percy exec`. An ES module config imports the entry file:

```js
import '@percy/playwright/dropin/index.js';
```

`toHaveScreenshot('hero.webp')` is posted as `hero`, the same name as `toHaveScreenshot('hero.png')`,
so moving a suite from PNG to WebP screenshots keeps its Percy baselines. Percy doesn't seed a first
build from committed `.webp` baselines that have no `.png` next to them; the first Percy build sets
the baseline instead.
