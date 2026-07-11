import BasePage from "../BasePage.js";

// iOS locators for the same demo app as Android's MainScreen. Kept as a
// separate class per platform (even though several ids happen to match
// Android's) rather than one shared Page Object with implicit
// cross-platform assumptions — never verified against a real device/
// simulator, since no Mac is available locally; only exercised via
// BrowserStack once that's wired up (Phase 13).
class MainScreen extends BasePage {
  get loginNavButton() {
    return $("~Login");
  }

  get webNavButton() {
    return $("~Webview");
  }

  get formsNavButton() {
    return $("~Forms");
  }

  get swipeNavButton() {
    return $("~Swipe");
  }

  get dragNavButton() {
    return $("~Drag");
  }

  get menuNavButton() {
    return $("~Menu");
  }

  async openLogin() {
    await this.loginNavButton.click();
  }

  async openForms() {
    await this.formsNavButton.click();
  }

  async openSwipe() {
    await this.swipeNavButton.click();
  }
}

export default new MainScreen();
