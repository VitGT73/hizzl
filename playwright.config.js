import { defineConfig } from "@playwright/test";
import { config } from "dotenv";
import Env from "@helpers/env";

/* This allows you to pass in a `test_env` environment variable
to specify which environment you want to run the tests against */
if (process.env.test_env) {
  config({
    path: `.env.${process.env.test_env}`,
    override: true,
  });
} else {
  config();
}

if (!process.env.CURRENTS_CI_BUILD_ID) {
  process.env.CURRENTS_CI_BUILD_ID = "butch-local-" + new Date().getTime();
}

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
      // "Accept": 'application/json',    // Удалить если не работает
    },
    // baseURL: "https://petstore.swagger.io",
    baseURL: Env.URL,
    ignoreHTTPSErrors: true,
    trace: "on-first-retry",
  },
});
