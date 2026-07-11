import BasePage from "../BasePage.js";

class UiElementsScreen extends BasePage {
  get textButton() {
    return $("~Text Button");
  }

  get alertButton() {
    return $("~Alert");
  }

  async waitForDisplayed() {
    await expect(this.textButton).toBeDisplayed();
    await expect(this.alertButton).toBeDisplayed();
  }
}

export default new UiElementsScreen();
