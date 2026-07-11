describe("Sanity check", () => {
  it("should have a driver session", async () => {
    console.log(await driver.getPageSource());
  });
});
