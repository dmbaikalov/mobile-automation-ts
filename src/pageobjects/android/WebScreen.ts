import BasePage from "../BasePage.js";

class WebScreen extends BasePage {
  async getWebviewContext() {
    const contexts = await this.driver.getContexts();

    return contexts.find(
      (context) =>
        typeof context === "string" && context.startsWith("WEBVIEW"),
    );
  }

  async switchToWebview() {
    await this.driver.waitUntil(
      async () => Boolean(await this.getWebviewContext()),
      {
        timeout: 10000,
        timeoutMsg: "No WEBVIEW context appeared within 10s",
        interval: 500,
      },
    );

    const webviewContext = await this.getWebviewContext();
    await this.driver.switchContext(webviewContext!);
  }

  async switchToNative() {
    await this.driver.switchContext("NATIVE_APP");
  }
}

export default new WebScreen();
