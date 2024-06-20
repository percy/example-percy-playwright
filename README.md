# example-percy-playwright

Example app showing integration of [Percy](https://percy.io/) visual testing into Playwright tests.

Based on the [TodoMVC](https://github.com/tastejs/todomvc) [VanillaJS](https://github.com/tastejs/todomvc/tree/master/examples/vanillajs)
app, forked at commit
[4e301c7014093505dcf6678c8f97a5e8dee2d250](https://github.com/tastejs/todomvc/tree/4e301c7014093505dcf6678c8f97a5e8dee2d250).

## Playwright Tutorial

The tutorial assumes you're already familiar with JavaScript and
[Playwright](https://playwright.dev/docs/library) and focuses on using it with Percy. You'll still
be able to follow along if you're not familiar with Playwright, but we won't
spend time introducing Playwright concepts.

The tutorial also assumes you have [Node 14+ with
npm](https://nodejs.org/en/download/) and
[git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed.

### Step 1

Clone the example application and install dependencies:

```bash
$ git clone git@github.com:percy/example-percy-playwright.git
$ cd example-percy-playwright
$ npm install
```

The example app and its tests will now be ready to go. You can explore the app
by opening the
[`index.html`](https://github.com/percy/example-percy-playwright/blob/master/index.html)
file in a browser.

### Step 2

Sign in to Percy and create a new project. You can name the project "todo" if you'd like. After
you've created the project, you'll be shown a token environment variable.

### Step 3

In the shell window you're working in, export the token environment variable:

**Unix**

``` shell
$ export PERCY_TOKEN="<your token here>"
```

**Windows**

``` shell
$ set PERCY_TOKEN="<your token here>"

# PowerShell
$ $Env:PERCY_TOKEN="<your token here>"
```

Note: Usually this would only be set up in your CI environment, but to keep things simple we'll
configure it in your shell so that Percy is enabled in your local environment.

### Step 4

Check out a new branch for your work in this tutorial (we'll call this branch
`tutorial-example`), then run tests & take snapshots:

``` shell
$ git checkout -b tutorial-example
$ npm run test-web
```

This will run the app's Playwright tests, which contain calls to create Percy snapshots. The snapshots
will then be uploaded to Percy for comparison. Percy will use the Percy token you used in **Step 2**
to know which organization and project to upload the snapshots to.

You can view the screenshots in Percy now if you want, but there will be no visual comparisons
yet. You'll see that Percy shows you that these snapshots come from your `tutorial-example` branch.

### Step 5

Use your text editor to edit `index.html` and introduce some visual changes. For example, you can
add inline CSS to bold the "Clear completed" button on line 32. After the change, that line looks
like this:

``` html
<button class="clear-completed" style="font-weight:bold">Clear completed</button>
```

### Step 6

Commit the change:

``` shell
$ git commit -am "Emphasize 'Clear completed' button"
```

### Step 7

Run the tests with snapshots again:

``` shell
$ npm run test-web
```

This will run the tests again and take new snapshots of our modified application. The new snapshots
will be uploaded to Percy and compared with the previous snapshots, showing any visual diffs.

At the end of the test run output, you will see logs from Percy confirming that the snapshots were
successfully uploaded and giving you a direct URL to check out any visual diffs.

### Step 8

Visit your project in Percy and you'll see a new build with the visual comparisons between the two
runs. Click anywhere on the Build 2 row. You can see the original snapshots on the left, and the new
snapshots on the right.

Percy has highlighted what's changed visually in the app! Snapshots with the largest changes are
shown first You can click on the highlight to reveal the underlying screenshot.

If you scroll down, you'll see that no other test cases were impacted by our changes to the 'Clear
completed' button. The unchanged snapshots appear grouped together at the bottom of the list.

### Finished! 😀

From here, you can try making your own changes to the app and tests, if you like. If you do, re-run
the tests  and you'll see any visual changes reflected in Percy.


## Playwright with Automate Tutorial

The tutorial assumes you're already familiar with JavaScript and
[Playwright](https://playwright.dev/docs/library) and focuses on using it with Percy. You'll still
be able to follow along if you're not familiar with Playwright, but we won't
spend time introducing Playwright concepts.

The tutorial also assumes you have [Node 14+ with
npm](https://nodejs.org/en/download/) and
[git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed.

Minimum required `@percy/cli` version is `1.28.8-beta.3` for this to work correctly. If you already have `@percy/cli` or `@percy/webdriver-utils` installed please update it to latest or minium required version.


### Step 1

Clone the example application and install dependencies:

```bash
$ git clone git@github.com:percy/example-percy-playwright.git
$ cd example-percy-playwright
$ npm install
```

This tutorial specifically uses Browserstack Automate to run playwright test.

For automate you will need credentials so refer to following instructions to get the same

1. You will need a BrowserStack `username` and `access key`. To obtain your access credentials, [sign up](https://www.browserstack.com/users/sign_up?utm_campaign=Search-Brand-India&utm_source=google&utm_medium=cpc&utm_content=609922405128&utm_term=browserstack) for a free trial or [purchase a plan](https://www.browserstack.com/pricing).

2. Please get your `username` and `access key` from [profile](https://www.browserstack.com/accounts/profile) page.

### Step 2

Sign in to Percy and create a new project. You can name the project "PercyOnAutomateTest" if you'd like. After
you've created the project, you'll be shown a token environment variable.

### Step 3

In the shell window you're working in, export the token environment variable:

**Unix**

``` shell
$ export PERCY_TOKEN="<your token here>"
```

**Windows**

``` shell
$ set PERCY_TOKEN="<your token here>"

# PowerShell
$ $Env:PERCY_TOKEN="<your token here>"
```

Note: Usually this would only be set up in your CI environment, but to keep things simple we'll
configure it in your shell so that Percy is enabled in your local environment.

Set the necessary BROWSERSTACK ENVIRONMENT variables

**Unix**

``` shell
$ export BROWSERSTACK_USERNAME="<your browserstack user_name>"
$ export BROWSERSTACK_ACCESS_KEY="<your browserstack access_key>"
```

**Windows**

``` shell
$ set BROWSERSTACK_USERNAME="<your browserstack access_key>"
$ set BROWSERSTACK_ACCESS_KEY="<your browserstack access_key>"

# PowerShell
$ $Env:BROWSERSTACK_USERNAME="<your browserstack access_key>"
$ $Env:BROWSERSTACK_ACCESS_KEY="<your browserstack access_key>"
```

Alternatively you can also update `USER_NAME`, `ACCESS_KEY` with Browserstack User name, Access key in the script as well.

### Step 4

Considering all the above steps are done, we will run our tests, which will create automate session as well as percy build.

``` shell
$ npm run test-automate-before
```

Your **First Percy on Automate** build is created.
On completion of the script, you would be able to see the your percy build. Since we ran for the first time, we would see these are new screenshots and hence there would be no comparisons.

### Step 5

Now in order to make comparisons happen we need to make changes to the existing website so that a visual change can occur.

``` shell
$ npm run test-automate-after
```

On completion of this script, this build would get compared to the previous build and hence we can see the visual changes which percy detected.

### Finished! 😀

From here, you can try making your own changes to the website and functional tests, if you like. If you do, re-run the tests and you'll see any visual changes reflected in Percy.