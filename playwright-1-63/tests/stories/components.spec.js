import { test as base, expect } from '@playwright/test';
import percySnapshot, { createRegion, percyTest } from '@percy/playwright';

// Wraps the built-in `mount` fixture so percySnapshot(component) can name snapshots by story id.
const test = percyTest(base);

test('button stories', async ({ mount }) => {
  const primary = await mount('components/Button/Primary');
  await expect(primary.getByRole('button')).toHaveText('Submit');
  // Named "components/Button/Primary" and scoped to the story root, so the gallery header is left out.
  await percySnapshot(primary);

  await primary.update({ label: 'Saving…' });
  await percySnapshot(primary, 'components/Button/Primary saving');

  await percySnapshot(await mount('components/Button/Disabled'));
});

test('card story with an ignored region', async ({ mount }) => {
  const card = await mount('components/Card/Default');
  await percySnapshot(card, undefined, {
    regions: [createRegion({ elementCSS: '.updated-at', algorithm: 'ignore' })]
  });
});
