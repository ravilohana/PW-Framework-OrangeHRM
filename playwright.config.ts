import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

dotenv.config({
  path: process.env.ENV_NAME
    ? `./env-files/.env.${process.env.ENV_NAME}`
    : `./env-files/.env.local`,
});

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [["list", { open: "always" }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    screenshot: "on-first-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
  
  },
  timeout: 120000,
  expect:{
    timeout: 60000
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Setup",
      testMatch: "global.setup.ts",
    },
    {
      name: "chromium",
      dependencies: ["Setup"],
      use: {
        ...devices["Desktop Chrome"]
      },
    },

    {
      name: "firefox",
      dependencies: ["Setup"],
      use: {
        ...devices["Desktop Firefox"]
      },
    },

    {
      name: "webkit",
      dependencies: ["Setup"],
      use: {
        ...devices["Desktop Safari"]
      },
    },

    {
      name: "chrome",
      use: {
        ...devices["Desktop Chrome"]
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
