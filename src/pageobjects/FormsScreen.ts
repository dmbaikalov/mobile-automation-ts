import BasePage from "./BasePage.js";

class FormsScreen extends BasePage {
  get textInput() {
    return $("~text-input");
  }

  async enterText(text: string) {
    await this.textInput.setValue(text);
  }

  async waitForTextEntered(text: string) {
    await browser.waitUntil(async () => (await this.textInput.getText()) === text, {
      timeout: 10000,
      timeoutMsg: "No such text in the input",
      interval: 1000,
    });
  }
}

export default new FormsScreen();
