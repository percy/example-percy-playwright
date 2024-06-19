const { chromium } = require("playwright");
const { percyScreenshot } = require("@percy/playwright");
const { test, expect } = require("@playwright/test");

const CAPABILITIES = {
  build: "test percy_screenshot",
  name: "BStack first_test",
  browser: "chrome",
  browser_version: "latest",
  os: "os x",
  osVersion: "sonoma",
  "browserstack.local": false,
  "browserstack.username":
    process.env.BROWSERSTACK_USERNAME || "BROWSERSTACK_USERNAME",
  "browserstack.accessKey":
    process.env.BROWSERSTACK_ACCESS_KEY || "BROWSERSTACK_ACCESS_KEY",
};

const WS_URL = `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(
  JSON.stringify(CAPABILITIES)
)}`;

test.describe("PercyOnAutomate demo test", () => {
  let page;
  let browser;

  test.beforeAll(async () => {
    browser = await chromium.connect({
      wsEndpoint: WS_URL,
    });

    const context = await browser.newContext({
      ignoreHTTPSErrors: true,
    });

    page = await context.newPage();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test("add products to cart", async () => {
    // navigate to required website
    await page.goto("https://bstackdemo.com/");
    // Wait until title matches the pattern
    await page.waitForFunction(() => {
      return document.title.match(/StackDemo/i);
    });
    // click on the apple products
    await page.click("\/\/*[@id='__next']/div/div/main/div[1]/div[2]/label/span");

    // [percy note: important step]
    // Percy Screenshot 1
    // take percyScreenshot using the following command
    await percyScreenshot(page, "screenshot_1");

    // locating product on webpage and getting name of the product
    // Wait until element is located using XPath
    const element = await page.waitForSelector('\/\/*[@id="10"]/p');
    // Get text content of the element
    const productText = await element.textContent();

    await page.click('\/\/*[@id="10"]/div[4]');
    // waiting until the Cart pane has been displayed on the webpage
    await page.waitForSelector(".float-cart__content");

    // locating product in cart and getting name of the product in cart
    const productCartTextElement = await page.$(
      'xpath=\/\/*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]'
    );

    const productCartText = await productCartTextElement.textContent();
    // [percy note: important step]
    // Percy Screenshot 2
    // take percy_screenshot using the following command
    await percyScreenshot(page, "screenshot_2", {
        "testCase": "Product should be added in the cart",
        "fullPage": true,
      },
    );

    // checking whether product has been added to cart by comparing product name
    expect(productText).toBe(productCartText);
  }, 100000);
});
