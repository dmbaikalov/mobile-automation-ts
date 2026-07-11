import MainScreen from "../../src/pageobjects/MainScreen.js";
import WebScreen from "../../src/pageobjects/WebScreen.js";

describe("Web screen", () => {
  it("should switch between native and webview contexts", async () => {
    await MainScreen.webNavButton.click();

    const contexts = await driver.getContexts();
    console.log("Available contexts:", contexts);

    await WebScreen.switchToWebview();
    console.log("Switched to webview, current context:", await driver.getContext());

    await WebScreen.switchToNative();
    console.log("Switched back, current context:", await driver.getContext());
  });
});
