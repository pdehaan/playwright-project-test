// @ts-check

import path from "node:path";

import { test, expect } from "@playwright/test";
import slugify from "@sindresorhus/slugify";

import { LoginPage } from "../models/login.js";

const DOMAIN = "https://truecolors.firefox.com/";

test.describe.parallel("modal tests", () => {
  test("basic test", async ({ page, browserName }, testInfo) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate();
    // await loginPage.login();
    const basename = slugify(`${testInfo.project.name} ${browserName} ${testInfo.title}`);
    const filename = path.join("screenshots", `${basename}.png`);
    await page.screenshot({path: filename, fullPage: true});
  });
});
