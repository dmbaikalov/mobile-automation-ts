import MainScreen from "../../src/pageobjects/MainScreen.js";
import LoginScreen from "../../src/pageobjects/LoginScreen.js";

describe("Login screen", () => {
  it("should navigate to login page and validate inputs", async () => {
    await MainScreen.openLogin();

    await LoginScreen.waitForDisplayed();
    await LoginScreen.login("example@mail.com", "password");
  });
});
