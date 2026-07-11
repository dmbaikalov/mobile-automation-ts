# mobile-automation-ts

Mobile UI automation framework built with Appium, WebdriverIO, and TypeScript. Runs Android tests locally against an emulator and in CI, and iOS tests against real devices on BrowserStack.

## Stack

- **Appium 3** + **WebdriverIO 9** (TypeScript)
- **UiAutomator2** (Android) / **XCUITest** (iOS) automation drivers
- **Mocha** test framework, **Allure** HTML reporting
- **GitHub Actions** CI (Android, on a macOS runner for emulator hardware acceleration)
- **BrowserStack App Automate** for iOS real-device execution

## Project layout

```
src/
  pageobjects/
    BasePage.ts          # shared base class
    android/             # Page Objects for the Android demo app
    ios/                  # Page Objects for the BrowserStack Sample App (iOS)
  specs/
    android/              # Android test specs
    ios/                   # iOS test specs (BrowserStack only)
  config/
    wdio.shared.conf.ts    # options common to both platforms
    wdio.android.conf.ts   # local Android emulator config
    wdio.ios.conf.ts       # BrowserStack iOS config
  constants.ts
.github/workflows/android.yml
docs/LEARNING_NOTES.md      # course notes from building this framework
```

## Why Android and iOS test different demo apps

Android runs [webdriverio/native-demo-app](https://github.com/webdriverio/native-demo-app). iOS runs BrowserStack's own official Sample App. This wasn't the original plan — native-demo-app only ships an iOS Simulator build, and BrowserStack's real-device cloud requires a device `.ipa`, which isn't published for it. Rather than build one, iOS specs target BrowserStack's Sample App instead. See `docs/LEARNING_NOTES.md` (Phase 13) for the full story.

## Prerequisites

- Node.js 20+
- For local Android runs: Android Studio, an AVD (API 33, Google APIs image recommended), Appium (`npm install -g appium` + `appium driver install uiautomator2`)
- For iOS runs: a [BrowserStack](https://www.browserstack.com) account (App Automate)

## Setup

```bash
npm install
cp .env.example .env
# fill in .env: ANDROID_APP_PATH, and for iOS, BROWSERSTACK_USERNAME/ACCESS_KEY
```

Android and iOS apps live in `apps/` (gitignored — they're build artifacts, not source). Download the Android APK from the [native-demo-app releases](https://github.com/webdriverio/native-demo-app/releases).

For iOS, upload the app to BrowserStack once per build and store the resulting URL in `.env`:

```bash
curl -u "$BROWSERSTACK_USERNAME:$BROWSERSTACK_ACCESS_KEY" \
  -X POST "https://api-cloud.browserstack.com/app-automate/upload" \
  -d '{"url": "https://www.browserstack.com/app-automate/sample-apps/ios/BrowserStack-SampleApp.ipa"}' \
  -H "Content-Type: application/json"
# -> {"app_url": "bs://<hash>"} — put this in BROWSERSTACK_IOS_APP_URL
```

## Running tests

```bash
npm run wdio        # Android, local emulator
npm run wdio:ios     # iOS, BrowserStack
```

## Reports

Every run writes raw results to `allure-results/` (gitignored). Generate and view the HTML report:

```bash
npm run report:generate
npm run report:open
```

## CI

`.github/workflows/android.yml` runs the Android suite on every push/PR to `main`, on a macOS runner (GitHub-hosted Ubuntu runners lack the hardware virtualization the Android emulator needs). Allure results are uploaded as a build artifact. The `web.e2e.ts` spec is excluded from CI — see `docs/LEARNING_NOTES.md` (Phase 11) for why.

## Documentation

`docs/LEARNING_NOTES.md` is a running log of everything learned while building this framework, phase by phase — from why Appium exists down to the real incidents hit while wiring up BrowserStack. Worth reading if you want the reasoning behind a given decision, not just the code.
