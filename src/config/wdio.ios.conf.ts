import { config as sharedConfig } from "./wdio.shared.conf.js";

// iOS tests only ever run on BrowserStack real devices (no local Mac
// available for a simulator) — see docs/LEARNING_NOTES.md, Phase 13,
// for the BrowserStack-specific config that will consume this file's
// capabilities shape once real credentials are wired up.
export const config: WebdriverIO.Config = {
  ...sharedConfig,

  port: 4723,

  specs: ["../specs/ios/**/*.ts"],

  maxInstances: 1,

  capabilities: [
    {
      platformName: "iOS",
      "appium:app": process.env.IOS_APP_PATH,
      "appium:deviceName": process.env.IOS_DEVICE_NAME || "iPhone 14",
      "appium:platformVersion": process.env.IOS_PLATFORM_VERSION || "16.0",
      "appium:automationName": "XCUITest",
    },
  ],
} as WebdriverIO.Config;
