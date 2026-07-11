import BasePage from "../BasePage.js";

class LoginScreen extends BasePage {
  get emailInput() {
    return $("~input-email");
  }

  get passwordInput() {
    return $("~input-password");
  }

  get submitButton() {
    return $("~button-LOGIN");
  }

  async waitForDisplayed() {
    await expect(this.emailInput).toBeDisplayed();
    await expect(this.passwordInput).toBeDisplayed();
    await expect(this.submitButton).toBeDisplayed();
  }

  async login(email: string, password: string) {
    await this.emailInput.setValue(email);
    await this.passwordInput.setValue(password);
    await this.submitButton.click();
  }
}

export default new LoginScreen();
