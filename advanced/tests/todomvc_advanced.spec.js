// PER-8195 Phase 1 — playwright advanced example.
// Each test exercises one row of the Advanced Feature Matrix. See ../matrix.yml
// for the canonical mapping of test name -> matrix row.

const percySnapshot = require('@percy/playwright')
const { test } = require('@playwright/test')

const PORT = process.env.PORT_NUMBER || 8004
const TEST_URL = `http://localhost:${PORT}`

test.describe('TodoMVC Advanced', () => {
  let server

  test.beforeAll(async () => {
    server = await new Promise((resolve) => {
      const s = require('http')
        .createServer((req, res) => {
          require('serve-handler')(req, res, {
            public: `${__dirname}/../..`,
            cleanUrls: true,
          })
        })
        .listen(PORT, () => resolve(s))
    })
  })

  test.afterAll(() => server && server.close())

  test.beforeEach(async ({ page }) => {
    await page.goto(TEST_URL)
    await page.evaluate(() => localStorage.clear())
    await page.fill('.new-todo', 'Walk the dog')
    await page.keyboard.press('Enter')
  })

  test('exercises widths', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises widths', {
      widths: [375, 768, 1280, 1920],
    })
  })

  test('exercises percyCSS', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises percyCSS', {
      percyCSS: '.todo-list li { background: #fffde7 !important; }',
    })
  })

  test('exercises minHeight', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises minHeight', {
      minHeight: 2000,
    })
  })

  test('exercises enableJavaScript', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises enableJavaScript', {
      enableJavaScript: true,
    })
  })

  test('exercises scope', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises scope', {
      scope: '.todoapp',
    })
  })

  test('exercises discovery options', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises discovery options', {
      discovery: {
        allowedHostnames: ['localhost'],
        networkIdleTimeout: 500,
      },
    })
  })

  test('exercises domTransformation', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises domTransformation', {
      domTransformation: `(documentClone) => {
        const banner = documentClone.createElement('div');
        banner.textContent = 'Snapshot via domTransformation';
        banner.style.cssText = 'background:#1976d2;color:#fff;padding:8px;';
        documentClone.body.prepend(banner);
      }`,
    })
  })

  test('exercises responsiveSnapshotCapture', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises responsiveSnapshotCapture', {
      responsiveSnapshotCapture: true,
      widths: [375, 1280],
    })
  })

  test('exercises labels', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises labels', {
      labels: 'smoke,sdk-playwright',
    })
  })

  test('exercises testCase', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises testCase', {
      testCase: 'todomvc-advanced-suite',
    })
  })

  test('exercises devicePixelRatio', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises devicePixelRatio', {
      devicePixelRatio: 2,
    })
  })

  test('exercises regions', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises regions', {
      regions: [
        {
          algorithm: 'ignore',
          elementSelector: {
            boundingBox: { x: 0, y: 0, width: 200, height: 100 },
          },
        },
      ],
    })
  })

  test('exercises readiness preset', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises readiness preset', {
      readiness: { preset: 'strict', timeoutMs: 5000 },
    })
  })

  test('exercises browsers override', async ({ page }) => {
    await percySnapshot(page, 'TodoMVC Advanced > exercises browsers override', {
      browsers: ['chrome', 'firefox'],
    })
  })
})
