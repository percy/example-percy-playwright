// Percy drop-in for Playwright's toHaveScreenshot() — the one required line:
require('@percy/playwright/dropin');
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/dropin',
  // One static server for the whole run — spec files don't manage ports themselves.
  webServer: {
    command: 'node tests/dropin/serve.js',
    port: 8000,
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
