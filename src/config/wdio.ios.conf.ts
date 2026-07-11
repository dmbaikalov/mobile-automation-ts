import { config as sharedConfig } from "./wdio.shared.conf.js";

// iOS tests only ever run on BrowserStack real devices — no local Mac
// available for a simulator. This talks to BrowserStack's Appium hub
// directly rather than a local Appium server, so there's no `port:
// 4723`/localhost here: WebdriverIO connects straight to
// hub-cloud.browserstack.com over HTTPS.
export const config: WebdriverIO.Config = {
  ...sharedConfig,

  protocol: "https",
  hostname: "hub-cloud.browserstack.com",
  port: 443,
  path: "/wd/hub",

  specs: ["../specs/ios/**/*.ts"],

  maxInstances: 1,

  capabilities: [
    {
      platformName: "iOS",
      "appium:app": process.env.BROWSERSTACK_IOS_APP_URL,
      "appium:automationName": "XCUITest",
      "bstack:options": {
        deviceName: process.env.IOS_DEVICE_NAME || "iPhone 14",
        osVersion: process.env.IOS_PLATFORM_VERSION || "16",
        userName: process.env.BROWSERSTACK_USERNAME,
        accessKey: process.env.BROWSERSTACK_ACCESS_KEY,
        projectName: "mobile-automation-ts",
        buildName: "iOS E2E",
      },
    },
  ],
  // BrowserStack installs/launches the app itself when the session
  // starts; no activateApp/terminateApp step needed here (unlike the
  // Android config, which manages that against a persistent local
  // emulator).
} as WebdriverIO.Config;
