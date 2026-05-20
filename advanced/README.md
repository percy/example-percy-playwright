# Advanced Percy + Playwright example — STUB

**Status:** Phase 1 stub. `matrix.yml` is populated based on `@percy/playwright` API research. Test code in `tests/todomvc_advanced.spec.js` is **not yet written**.

See the basic example at the repo root. See [`matrix.yml`](./matrix.yml) for the planned matrix-row coverage.

## What this example will cover

Each test in `tests/todomvc_advanced.spec.js` will exercise one row of the matrix (widths, percyCSS, minHeight, enableJavaScript, scope, discovery, domTransformation, responsiveSnapshotCapture, labels, testCase, devicePixelRatio, regions via `createRegion`, readiness preset, browsers, cross-origin iframe handling, cookie capture). Global SDK config lives in `.percy.yml`.

## Run locally (once tests are written)

```bash
cd advanced
npm install
export PERCY_TOKEN="<your project token>"      # do NOT commit
npm run test:advanced
```

Or in `--testing` mode:

```bash
npm run test:advanced:ci
```

## Coverage matrix

States: `Covered` / `N/A — <reason>` / `Planned` / `Deprecated`. Source of truth: [`matrix.yml`](./matrix.yml).

> Phase 1 stub: most rows are currently `Planned`. Basic example already exercises `widths` on 2 of 3 snapshots.
