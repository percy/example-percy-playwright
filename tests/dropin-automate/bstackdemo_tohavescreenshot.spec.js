// NOTE: no Percy imports — plain Playwright visual assertions. Run with a
// Percy on Automate (auto_…) token: the drop-in hands each toHaveScreenshot()
// to the Percy-on-Automate flow, capturing on the remote BrowserStack browser
// through the session (a public site is used because that remote browser
// cannot reach your localhost).
const { test, expect } = require('./fixtures');

test.describe('BStack demo (drop-in on Automate)', function () {
  test('home page looks right', async function ({ page }) {
    await page.goto('https://bstackdemo.com');
    await expect(page).toHaveScreenshot('bstackdemo-home.png');
  });
});
