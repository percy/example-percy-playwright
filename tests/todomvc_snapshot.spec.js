const percySnapshot = require('@percy/playwright');
const { test, expect } = require('@playwright/test');

test.describe('Website Visual Testing', function () {
  test.setTimeout(120000); // 2 minutes timeout for all tests

  test.beforeEach(async function ({ page }) {
    // Set longer timeout for external websites
    page.setDefaultTimeout(90000);
  });

  // test('salesforce-home', async function ({ page }) {
  //   await page.goto('https://salesforce.com/', { timeout: 90000 });
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'salesforce-home', { labels: "crm" });
  // });

  // test('imdb-home', async function ({ page }) {
  //   await page.goto('https://www.imdb.com/', { timeout: 90000 });
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'imdb-home', { labels: "entertainment, movies" });
  // });

  // test('gaana-home', async function ({ page }) {
  //   await page.goto('https://gaana.com/');
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'gaana-home', { labels: "music, india" });
  // });

  // test('soundcloud-home', async function ({ page }) {
  //   await page.goto('https://soundcloud.com/');
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'soundcloud-home', { labels: "music, streaming" });
  // });

  // test('spotify-home', async function ({ page }) {
  //   await page.goto('https://www.spotify.com/', { timeout: 90000 });
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'spotify-home', { labels: "music" });
  // });

  // test('abc-xyz', async function ({ page }) {
  //   await page.goto('https://abc.xyz/', { timeout: 90000 });
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'abc-xyz', { labels: "alphabet, corporate" });
  // });

  // test('bmw-home', async function ({ page }) {
  //   await page.goto('https://www.bmw.com/en/index.html', { timeout: 90000 });
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'bmw-home', { labels: "automotive, luxury" });
  // });

  // test('porsche-usa', async function ({ page }) {
  //   await page.goto('https://www.porsche.com/usa/');
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'porsche-usa', { labels: "automotive, sports" });
  // });

  // test('spacex-home', async function ({ page }) {
  //   await page.goto('https://www.spacex.com/');
  //   await page.waitForTimeout(10000); // 10 seconds as requested
  //   await percySnapshot(page, 'spacex-home');
  // });

  // test('blueorigin-home', async function ({ page }) {
  //   await page.goto('https://www.blueorigin.com/', { timeout: 90000 });
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'blueorigin-home');
  // });

  // test('wikipedia-gpt3', async function ({ page }) {
  //   await page.goto('https://en.wikipedia.org/wiki/GPT-3');
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'wikipedia-gpt3');
  // });

  // test('amazon-india', async function ({ page }) {
  //   await page.goto('https://www.flipkart.com/', { timeout: 90000 });
  //   await page.waitForTimeout(6000);
  //   await percySnapshot(page, 'flipkart-india');
  // });

  // test('boringcompany-projects', async function ({ page }) {
  //   await page.goto('https://www.boringcompany.com/projects');
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'boringcompany-projects');
  // });

  // test('megamart-cart', async function ({ page }) {
  //   await page.goto('https://www.megamart.com/cart/1');
  //   await page.waitForTimeout(6000);
  //   await percySnapshot(page, 'megamart-cart');
  // });

  test('apple-home', async function ({ page }) {
    await page.goto('https://www.apple.com/');
    await page.waitForTimeout(5000); // Extra time for dynamic content
    await percySnapshot(page, 'apple-home', { labels: "tech, premium" });
  });

  test('apple-mac', async function ({ page }) {
    await page.goto('https://www.apple.com/mac/');
    await page.waitForTimeout(3000);
    await percySnapshot(page, 'apple-mac');
  });

  // test('nasa-home', async function ({ page }) {
  //   await page.goto('https://www.nasa.gov/', { timeout: 90000 });
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'nasa-home');
  // });

  // test('nasa-mars-facts', async function ({ page }) {
  //   await page.goto('https://mars.nasa.gov/all-about-mars/facts/', { timeout: 90000 });
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'nasa-mars-facts');
  // });

  // test('nasa-mars-rover', async function ({ page }) {
  //   await page.goto('https://science.nasa.gov/mission/msl-curiosity/', { timeout: 90000 });
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'nasa-mars-rover');
  // });


  //  test('third example com', async function ({ page }) {
  //   await page.goto('https://example.com/', { timeout: 90000 });
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'example-com');
  // });

  // test('worldometers-covid', async function ({ page }) {
  //   await page.goto('https://www.worldometers.info/coronavirus/', { timeout: 90000 });
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'worldometers-covid');
  // });

  //  test('visual testing 2', async function ({ page }) {
  //   await page.goto('https://hemanthh276.github.io/visual-testing-boxes/');
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'visual-testing-2', { labels: "ai, tech" });
  // });

  // test('visual testing 2 with scope', async function ({ page }) {
  //   await page.goto('https://hemanthh276.github.io/visual-testing-boxes/');
  //   await page.waitForTimeout(3000);
  //   // await percySnapshot(page, 'visual-testing-2');
  //   await percySnapshot(page, 'visual-testing-2-scope', { 
  //     scope: 'img.random-imageeeee',
  //     fullPage: true,
  //   });
  // });

  // test('visual testing 3', async function ({ page }) {
  //   await page.goto('https://hemanthh276.github.io/visual-testing-boxes/');
  //   await page.waitForTimeout(3000);
  //   await percySnapshot(page, 'Microsoft');
  // });

  // test('openai-projects', async function ({ page }) {
  //   await page.goto('https://www.whatthefuckshouldimakefordinner.com/');
  //   await page.waitForTimeout(3000);
  //   const options = { "testCase": "OpenAI projects page visual test", labels: "ai, projects" };
  //   await percySnapshot(page, 'openai-projects', options);
  // });

  // ========== SEARCH TESTING SUITE - 40 DINNER TESTS ==========
  // Testing various combinations for search functionality validation
  // Group 8: Unique test cases with different labels (7 tests)
  // test('keyboard-arrow-navigation', async function ({ page }) {
  //   await page.goto('https://www.whatthefuckshouldimakefordinner.com/');
  //   await page.waitForTimeout(3000);
  //   const options = { "testCase": "Arrow keys should navigate search suggestions", labels: "keyboard, navigation, arrows, accessibility" };
  //   await percySnapshot(page, 'arrow-key-navigation-state', options);
  // });

  // test('keyboard-enter-selection', async function ({ page }) {
  //   await page.goto('https://www.whatthefuckshouldimakefordinner.com/');
  //   await page.waitForTimeout(3000);
  //   const options = { "testCase": "Enter key should select highlighted suggestion", labels: "keyboard, enter, selection" };
  //   await percySnapshot(page, 'enter-key-selection-state', options);
  // });

  // test('keyboard-enter-selection', async function ({ page }) {
  //   await page.goto('https://in.pinterest.com/');
  //   await page.waitForTimeout(3000);
  //   // const options = { fullPage: true };
  //   await percySnapshot(page, 'enter-key-selection-state');
    
  // });

  // test('keyboard-enter-selection', async function ({ page }) {
  //   // Block third-party ad/analytics scripts that monkey-patch native objects
  //   // and cause Percy's DOM serialization to fail
  //   await page.route('**/*', (route) => {
  //     const url = route.request().url();
  //     const blockedDomains = [
  //       'doubleclick.net',
  //       'googlesyndication.com',
  //       'googletagmanager.com',
  //       'googletagservices.com',
  //       'google-analytics.com',
  //       'amazon-adsystem.com',
  //       'scorecardresearch.com',
  //       'taboola.com',
  //       'outbrain.com',
  //     ];
  //     if (blockedDomains.some((domain) => url.includes(domain))) {
  //       route.abort();
  //     } else {
  //       route.continue();
  //     }
  //   });

  //   await page.goto('https://edition.cnn.com/');
  //   await page.waitForTimeout(3000);
  //   const options = { fullPage: true };
  //   await percySnapshot(page, 'enter-key-selection-state', options);
  // });

  // test('keyboard-enter-selection1', async function ({ page }) {
  //   // Block third-party ad/analytics scripts that monkey-patch native objects
  //   // and cause Percy's DOM serialization to fail
  //   await page.route('**/*', (route) => {
  //     const url = route.request().url();
  //     const blockedDomains = [
  //       'doubleclick.net',
  //       'googlesyndication.com',
  //       'googletagmanager.com',
  //       'googletagservices.com',
  //       'google-analytics.com',
  //       'amazon-adsystem.com',
  //       'scorecardresearch.com',
  //       'taboola.com',
  //       'outbrain.com',
  //     ];
  //     if (blockedDomains.some((domain) => url.includes(domain))) {
  //       route.abort();
  //     } else {
  //       route.continue();
  //     }
  //   });

  //   await page.goto('https://techcrunch.com/');
  //   await page.waitForTimeout(3000);
  //   const options = { fullPage: true };
  //   await percySnapshot(page, 'enter-key-selection-state', options);
  // });

  // test('keyboard-enter-selection', async function ({ page }) {
  //   // Block third-party ad/analytics scripts that monkey-patch native objects
  //   // and cause Percy's DOM serialization to fail
  //   await page.route('**/*', (route) => {
  //     const url = route.request().url();
  //     const blockedDomains = [
  //       'doubleclick.net',
  //       'googlesyndication.com',
  //       'googletagmanager.com',
  //       'googletagservices.com',
  //       'google-analytics.com',
  //       'amazon-adsystem.com',
  //       'scorecardresearch.com',
  //       'taboola.com',
  //       'outbrain.com',
  //     ];
  //     if (blockedDomains.some((domain) => url.includes(domain))) {
  //       route.abort();
  //     } else {
  //       route.continue();
  //     }
  //   });

  //   await page.goto('https://kalshi.com/');
  //   await page.waitForTimeout(3000);
  //   const options = { fullPage: true };
  //   await percySnapshot(page, 'enter-key-selection-state', options);
  // });

  // test('keyboard-escape-close', async function ({ page }) {
  //   await page.goto('https://www.whatthefuckshouldimakefordinner.com/');
  //   await page.waitForTimeout(3000);
  //   const options = { "testCase": "Escape key should close search dropdown", labels: "keyboard, escape, close, dropdown" };
  //   await percySnapshot(page, 'escape-key-close-state', options);
  // });


  // test('search-child-snapshot-grouping', async function ({ page }) {
  //   await page.goto('https://www.whatthefuckshouldimakefordinner.com/');
  //   await page.waitForTimeout(3000);
  //   const options = { "testCase": "Hidden results should show search indicator", labels: "search, grouping, hierarchy, child" };
  //   await percySnapshot(page, 'grouped child search', options);
  // });

  // test('search-parent-snapshot-grouping', async function ({ page }) {
  //   await page.goto('https://www.whatthefuckshouldimakefordinner.com/');
  //   await page.waitForTimeout(3000);
  //   const options = { "testCase": "Enter key should select highlighted suggestion", labels: "search, grouping, hierarchy, parent" };
  //   await percySnapshot(page, 'grouped-parent-in-search', options);
  // });

  // test('filter-results-hidden', async function ({ page }) {
  //   await page.goto('https://www.whatthefuckshouldimakefordinner.com/');
  //   await page.waitForTimeout(3000);
  //   const options = { "testCase": "Hidden results should show filter indicator", labels: "search, filter, hidden, indicator" };
  //   await percySnapshot(page, 'filtered-content-indicator', options);
  // });

  // test('mobile-responsive-layout', async function ({ page }) {
  //   await page.goto('https://www.whatthefuckshouldimakefordinner.com/');
  //   await page.waitForTimeout(3000);
  //   const options = { "testCase": "Enter key should select highlighted suggestion", labels: "responsive, mobile, viewport" };
  //   await percySnapshot(page, 'mobile-viewport-test', options);
  // });
});