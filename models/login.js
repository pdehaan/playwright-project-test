// @ts-check

/**
 * Docs:
 * - https://playwright.dev/docs/pom
 * - https://playwright.dev/docs/test-pom
 */

import dotenv from "dotenv";
dotenv.config();

class LoginPage {
  /**
   * @param {import('playwright').Page} page 
   */
  constructor(page) {
    this.page = page;

    this.passwordLocator = page.locator("input[name='password']");
  }

  async navigate() {
    await this.page.goto('https://truecolors.firefox.com');
  }

  async login(password = process.env.PASSWORD) {
    await this.passwordLocator.type(password);
    await this.passwordLocator.press('Enter');
  }
}

export { LoginPage };
