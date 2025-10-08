const { chromium } = require('playwright');

const CAPS = {
  build: "test percy_screenshot",
  name: "BStack repro_connect",
  browser: "chrome",
  browser_version: "latest",
  os: "os x",
  osVersion: "sonoma",
  "browserstack.local": false,
  "browserstack.username": process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
  "browserstack.accessKey": process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",
};

const WS_URL = `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(
  JSON.stringify(CAPS)
)}`;

async function run() {
  console.log('WS_URL:', WS_URL);
  try {
    console.log('Attempting to connect...');
    const browser = await chromium.connect({ wsEndpoint: WS_URL, timeout: 30000 });
    console.log('Connected to BrowserStack endpoint');

    const context = await browser.newContext();
    const page = await context.newPage();

  const target = process.env.TARGET_URL || 'https://bstackdemo.com/';
  console.log('Navigating to', target, '...');
  // Use default options to match example tests (some remote endpoints may reject extra options)
  await page.goto(target);
    const title = await page.title();
    console.log('Page title:', title);

    await browser.close();
    console.log('Browser closed, success');
  } catch (err) {
    console.error('Repro script error:');
    console.error(err);
    process.exitCode = 1;
  }
}

run();
