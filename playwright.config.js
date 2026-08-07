// Percy drop-in for Playwright's toHaveScreenshot() — the one required line:
require('@percy/playwright/dropin');
const { defineConfig } = require('@playwright/test');

// This is the repo's DEFAULT Playwright config on purpose: Percy's baseline
// discovery (first-run seeding and `percy playwright:setup-baseline`) reads
// the default playwright.config.js — configs loaded via `--config` are not
// seen by discovery. The other examples in this repo run specific files
// (`playwright test <file>`) and are unaffected.
module.exports = defineConfig({
  testDir: './tests',
  // One static server for the drop-in example — port 8001 so it never
  // collides with the percySnapshot example, which starts its own server
  // on port 8000 inside the spec.
  webServer: {
    command: 'node tests/dropin/serve.js',
    port: 8001,
    env: { PORT_NUMBER: '8001' },
    reuseExistingServer: true
  },
  projects: [
    {
      name: 'chromium',
      // Load-bearing for first-run baseline seeding: Percy's snapshot identity is
      // (name, use.browserName, use.viewport.width), read from the RESOLVED config —
      // Playwright's runtime defaults don't appear there, so both values must be
      // explicit. When either is missing, `percy exec` skips seeding and
      // `percy playwright:setup-baseline` exits with "projects without an explicit
      // browser/viewport cannot be mapped automatically".
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 }
      }
    }
  ]
});
