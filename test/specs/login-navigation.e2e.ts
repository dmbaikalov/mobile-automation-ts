import { APP_PACKAGE } from "../constants";

beforeEach(async () => {
  await driver.activateApp(APP_PACKAGE);
});

afterEach(async () => {
  await driver.terminateApp(APP_PACKAGE);
});

describe("Sanity check", () => {
  it("should navigate to login page and validate inputs", async () => {
    const mainPageLoginButton = $("~Login");
    const emailInput = $("~input-email");
    const passwrodInput = $("~input-password");
    const loginSubmitButton = $("~button-LOGIN");

    await expect(mainPageLoginButton).toBeDisplayed();
    await mainPageLoginButton.click();

    await expect(emailInput).toBeDisplayed();
    await expect(passwrodInput).toBeDisplayed();
    await expect(loginSubmitButton).toBeDisplayed();

    await emailInput.setValue("example@mail.com");
    await passwrodInput.setValue("password");
  });

  it("should navigate to swipe page and swipe", async () => {
    const mainPageSwipeBtn = $("~Swipe");

    await mainPageSwipeBtn.click();

    const card = $("~card");
    const { x, y } = await card.getLocation();
    const { width, height } = await card.getSize();

    await driver.execute("mobile: swipeGesture", {
      left: x,
      top: y,
      width,
      height,
      direction: "left",
      percent: 0.75,
    });

    const nextCardText = $(
      'android=new UiSelector().textContains("GREAT COMMUNITY")',
    );

    await expect(nextCardText).toBeDisplayed();
  });
});
