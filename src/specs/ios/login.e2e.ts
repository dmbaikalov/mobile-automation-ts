import MainScreen from "../../pageobjects/ios/MainScreen.js";
import LoginScreen from "../../pageobjects/ios/LoginScreen.js";

// Runs only against wdio.ios.conf.ts (BrowserStack, Phase 13) — never
// locally, since there's no Mac/iOS simulator available. Kept in its own
// src/specs/ios/ subfolder so the Android config's specs glob
// (./src/specs/android/**/*.ts) doesn't sweep it into a local or CI
// Android run; the iOS config points its specs pattern here explicitly.
describe("Login screen (iOS)", () => {
  it("should navigate to login page and validate inputs", async () => {
    await MainScreen.openLogin();

    await LoginScreen.waitForDisplayed();
    await LoginScreen.login("example@mail.com", "password");
  });
});
