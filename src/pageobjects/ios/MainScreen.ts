import BasePage from "../BasePage.js";

// Locators verified against a real BrowserStack App Automate session
// (BrowserStack-SampleApp.ipa, bundleId com.browserstack.Sample-iOS) via
// getPageSource() — not guessed. This is a different demo app than
// Android's webdriverio/native-demo-app: BrowserStack's official iOS
// sample app has no login/product screens, only a 3-tab UI (UI Elements,
// Web View, Local Testing). Android and iOS therefore exercise different
// underlying apps rather than the same one, a deliberate trade-off since
// no device build of native-demo-app is available for real iOS hardware.
class MainScreen extends BasePage {
  get uiElementsTabButton() {
    return $("~UI Elements");
  }

  get webViewTabButton() {
    return $("~Web View");
  }

  get localTestingTabButton() {
    return $("~Local Testing");
  }

  async openUiElements() {
    await this.uiElementsTabButton.click();
  }

  async openWebView() {
    await this.webViewTabButton.click();
  }

  async openLocalTesting() {
    await this.localTestingTabButton.click();
  }
}

export default new MainScreen();
