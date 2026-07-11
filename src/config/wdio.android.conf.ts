import { config as sharedConfig } from "./wdio.shared.conf.js";
import { APP_PACKAGE } from "../constants.js";

export const config: WebdriverIO.Config = {
  ...sharedConfig,

  port: 4723,

  specs: ["../specs/android/**/*.ts"],

  // A single local emulator can only host one Appium session at a time;
  // running specs in parallel here causes UiAutomator2 instrumentation
  // crashes. Real parallelism needs multiple devices (Phase 14).
  maxInstances: 1,

  capabilities: [
    {
      platformName: "Android",
      "appium:app": process.env.ANDROID_APP_PATH,
      "appium:deviceName": process.env.ANDROID_DEVICE_NAME || "Pixel 7 Pro",
      "appium:platformVersion": process.env.ANDROID_PLATFORM_VERSION || "13.0",
      "appium:automationName": "UiAutomator2",
    },
  ],

  // Reset app state between tests — package-based, so Android-only.
  beforeTest: async function () {
    await driver.activateApp(APP_PACKAGE);
  },

  // Must also re-run the shared screenshot-on-failure logic, since this
  // afterTest replaces (doesn't merge with) wdio.shared.conf.ts's own.
  afterTest: async function (test, context, results) {
    await (sharedConfig.afterTest as WebdriverIO.Config["afterTest"])?.(
      test,
      context,
      results,
    );
    await driver.terminateApp(APP_PACKAGE);
  },
} as WebdriverIO.Config;
