import MainScreen from "../../pageobjects/android/MainScreen.js";
import SwipeScreen from "../../pageobjects/android/SwipeScreen.js";

describe("Swipe screen", () => {
  it("should navigate to swipe page and swipe", async () => {
    await MainScreen.openSwipe();

    await SwipeScreen.swipeCardLeft();
    await SwipeScreen.waitForNextCardDisplayed();
  });
});
