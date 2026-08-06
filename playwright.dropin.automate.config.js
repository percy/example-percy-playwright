// Percy drop-in on a Percy on Automate project — the same one-line registration;
// the browser fixture in tests/dropin-automate/fixtures.js connects to a real
// BrowserStack Automate session, where each toHaveScreenshot() is captured on
// the remote browser through the session.
require('@percy/playwright/dropin');
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/dropin-automate',
  timeout: 120000,
  workers: 1,
  projects: [
    {
      name: 'chromium',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 }
      }
    }
  ]
});
