// BrowserStack Automate fixture for the drop-in — connects the Playwright
// browser to a real Automate session. Credentials come from the environment,
// same as this repo's other automate examples.
const base = require('@playwright/test');

const CAPABILITIES = {
  build: 'percy dropin automate example',
  name: 'toHaveScreenshot drop-in',
  browser: 'chrome',
  browser_version: 'latest',
  os: 'os x',
  osVersion: 'sonoma',
  'browserstack.local': false,
  'client.playwrightVersion': require('@playwright/test/package.json').version,
  'browserstack.username':
    process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  'browserstack.accessKey':
    process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY'
};

exports.test = base.test.extend({
  browser: async ({}, use) => {
    const endpoint = `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(
      JSON.stringify(CAPABILITIES)
    )}`;
    const browser = await base.chromium.connect(endpoint);
    await use(browser);
    await browser.close();
  }
});

exports.expect = base.expect;
