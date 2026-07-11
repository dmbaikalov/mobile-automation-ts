import MainScreen from "../../src/pageobjects/MainScreen.js";
import SwipeScreen from "../../src/pageobjects/SwipeScreen.js";

describe("Swipe screen", () => {
  it("should navigate to swipe page and swipe", async () => {
    await MainScreen.openSwipe();

    await SwipeScreen.swipeCardLeft();
    await SwipeScreen.waitForNextCardDisplayed();
  });
});
