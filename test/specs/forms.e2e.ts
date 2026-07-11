import MainScreen from "../../src/pageobjects/MainScreen.js";
import FormsScreen from "../../src/pageobjects/FormsScreen.js";

describe("Forms screen", () => {
  it("should navigate to Forms page and enter text", async () => {
    const textToEnter = "Hello World!";

    await MainScreen.openForms();

    await FormsScreen.enterText(textToEnter);
    await FormsScreen.waitForTextEntered(textToEnter);
  });
});
