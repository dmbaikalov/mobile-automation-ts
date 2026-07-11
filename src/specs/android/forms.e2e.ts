import MainScreen from "../../pageobjects/android/MainScreen.js";
import FormsScreen from "../../pageobjects/android/FormsScreen.js";

describe("Forms screen", () => {
  it("should navigate to Forms page and enter text", async () => {
    const textToEnter = "Hello World!";

    await MainScreen.openForms();

    await FormsScreen.enterText(textToEnter);
    await FormsScreen.waitForTextEntered(textToEnter);
  });
});
