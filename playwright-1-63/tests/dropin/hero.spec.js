// No Percy imports: the drop-in imported in playwright.config.mjs routes these through Percy.
import { test, expect } from '@playwright/test';

test('hero', async ({ page }) => {
  await page.goto('/pages/hero.html');

  // Posted to Percy as "hero" and "hero-el", the same names the .png versions would get,
  // so switching the screenshot format keeps the Percy baseline.
  await expect(page).toHaveScreenshot('hero.webp');
  await expect(page.locator('.hero')).toHaveScreenshot('hero-el.webp');
});
