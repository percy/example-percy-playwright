// An ES module config imports the drop-in's entry file; `@percy/playwright/dropin` only resolves from require().
import '@percy/playwright/dropin/index.js';
import { defineConfig } from '@playwright/test';

const PORT = Number(process.env.GALLERY_PORT) || 8020;
const ORIGIN = `http://localhost:${PORT}`;

export default defineConfig({
  webServer: {
    command: `npx vite --port ${PORT} --strictPort`,
    url: `${ORIGIN}/gallery/index.html`,
    reuseExistingServer: true
  },
  projects: [
    {
      name: 'stories',
      testDir: './tests/stories',
      // `mount` opens baseURL (the gallery) and calls its window.mount().
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
        baseURL: `${ORIGIN}/gallery/index.html`
      }
    },
    {
      name: 'dropin',
      testDir: './tests/dropin',
      // Percy's baseline identity for the drop-in is (name, browserName, viewport.width), read
      // from the resolved config, so both are set explicitly.
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
        baseURL: ORIGIN
      }
    }
  ]
});
