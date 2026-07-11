import MainScreen from "../../pageobjects/android/MainScreen.js";
import LoginScreen from "../../pageobjects/android/LoginScreen.js";

describe("Login screen", () => {
  it("should navigate to login page and validate inputs", async () => {
    await MainScreen.openLogin();

    await LoginScreen.waitForDisplayed();
    await LoginScreen.login("example@mail.com", "password");
  });
});
