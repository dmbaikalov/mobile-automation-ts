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
});
