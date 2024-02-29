import { defineConfig } from "@playwright/test";
import dotenv  from "dotenv";

dotenv.config();


export default defineConfig({
  testDir: "./tests",

  timeout: 30 * 1000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['allure-playwright',{outputFolder:'allure-results'}]],
  // reporter: process.env.CI ? [["github"], ["list"], ["html"], ["@currents/playwright"]] : [["list"], ["html"]],
  // globalTeardown: require.resolve('./utils/config/global-teardown'),

  projects: [
    {
      name: "api-checks",
    },
  ],

  use: {
    extraHTTPHeaders: {
      "playwright-solutions": "true",
    },
    baseURL: process.env.BASE_URL,
    ignoreHTTPSErrors: true,
    trace: "on-first-retry",
  },
});
