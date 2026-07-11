import MainScreen from "../../pageobjects/ios/MainScreen.js";
import UiElementsScreen from "../../pageobjects/ios/UiElementsScreen.js";

// Runs only against wdio.ios.conf.ts (BrowserStack) — never locally,
// since there's no Mac/iOS simulator available. See MainScreen.ts for
// why this targets a different underlying app than the Android specs.
describe("UI Elements screen (iOS, BrowserStack)", () => {
  it("should show the Text and Alert buttons on the default tab", async () => {
    await MainScreen.openUiElements();

    await UiElementsScreen.waitForDisplayed();
  });
});
