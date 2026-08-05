// NOTE: no Percy imports — these are plain Playwright visual assertions.
// The drop-in registered in playwright.dropin.config.js routes every
// toHaveScreenshot() below through Percy when run under `percy exec`.
const { test, expect } = require('@playwright/test');

const PORT = process.env.PORT_NUMBER || 8000;
const TEST_URL = `http://localhost:${PORT}`;

test.describe('TodoMVC (drop-in)', function () {
  let server;

  test.beforeAll(async function () {
    server = await new Promise((resolve) => {
      let server = require('http')
        .createServer((req, res) => {
          require('serve-handler')(req, res, { public: `${__dirname}/../..`, cleanUrls: true });
        })
        .listen(PORT, () => resolve(server));
    });
  });

  test.afterAll(() => {
    server.close();
  });

  test.beforeEach(async function ({ page }) {
    await page.goto(TEST_URL);
    await page.evaluate(() => localStorage.clear());
  });

  test('Loads the app', async function ({ page }) {
    await expect(page).toHaveScreenshot('todomvc-initial.png');
  });

  test('Accepts a new todo', async function ({ page }) {
    await page.fill('.new-todo', 'A new fancy todo');
    await page.keyboard.press('Enter');

    // Element (locator) subjects work too — Percy scopes the capture.
    await expect(page.locator('section.todoapp')).toHaveScreenshot('todomvc-new-todo.png');
  });
});
