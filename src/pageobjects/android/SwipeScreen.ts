import BasePage from "../BasePage.js";

class SwipeScreen extends BasePage {
  get card() {
    return $("~card");
  }

  get nextCardText() {
    return $('android=new UiSelector().textContains("GREAT COMMUNITY")');
  }

  async swipeCardLeft() {
    const { x, y } = await this.card.getLocation();
    const { width, height } = await this.card.getSize();

    await this.driver.execute("mobile: swipeGesture", {
      left: x,
      top: y,
      width,
      height,
      direction: "left",
      percent: 0.75,
    });
  }

  async waitForNextCardDisplayed() {
    await expect(this.nextCardText).toBeDisplayed();
  }
}

export default new SwipeScreen();
