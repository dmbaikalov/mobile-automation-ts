export const config: Partial<WebdriverIO.Config> = {
  runner: "local",
  tsConfigPath: "../../tsconfig.json",

  // specs is intentionally left unset here — wdio.android.conf.ts and
  // wdio.ios.conf.ts each define their own platform-specific glob.
  exclude: [],

  maxInstances: 10,

  logLevel: "info",
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,

  services: ["appium"],
  framework: "mocha",
  reporters: ["spec", ["allure", { outputDir: "allure-results" }]],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },

  // Screenshot-on-failure is the only lifecycle behavior common to both
  // platforms. App reset (activateApp/terminateApp) is Android-specific
  // (package-based) and belongs in wdio.android.conf.ts instead — a
  // BrowserStack iOS session manages app install/launch itself.
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries },
  ) {
    if (!passed) {
      await browser.takeScreenshot();
    }
  },
};
