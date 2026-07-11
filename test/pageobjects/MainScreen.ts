import BasePage from "./BasePage.js";

class MainScreen extends BasePage {
  get loginNavButton() {
    return $("~Login");
  }

  get webNavButton() {
    return $("~Web");
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
