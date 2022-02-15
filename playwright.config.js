// @ts-check

/**
 * Docs: https://playwright.dev/docs/test-advanced
 */

import { devices } from '@playwright/test';

/** @type {import('@playwright/test').PlaywrightTestConfig} */

const config = {
  projects: [
    {
      name: 'Desktop Chrome',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Desktop Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Desktop Safari',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: "iPhone 12 Pro Max",
      use: { ...devices["iPhone 12 Pro Max"]}
    }
  ],
};

export default config;
