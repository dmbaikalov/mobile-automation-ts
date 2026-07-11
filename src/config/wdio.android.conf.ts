import { config as sharedConfig } from "./wdio.shared.conf.js";

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
} as WebdriverIO.Config;
