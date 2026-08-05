// Percy drop-in for Playwright's toHaveScreenshot() — the one required line:
require('@percy/playwright/dropin');
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/dropin',
  projects: [
    {
      name: 'chromium',
      // An explicit browserName + viewport lets Percy map committed baseline
      // screenshots onto its snapshot identity for first-run seeding.
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 }
      }
    }
  ]
});
