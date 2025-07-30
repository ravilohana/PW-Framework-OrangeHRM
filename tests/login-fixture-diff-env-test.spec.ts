import { describe } from "node:test";
import { test } from "../fixtures/common-utils-fixture";

test.describe("ADMIN_1", () => {
  test.use({ storageState: "./playwright/.auth/admin_1.json" });
  test("Login as admin_1 (john snow)", async ({
    page,
    loginPage,
    dashboardPage,
  }) => {
    loginPage.gotoOrangeHRM();
    const dashboardTitle = await dashboardPage.getDashboardTitleText();
    console.log("Dashboard Title: ", dashboardTitle);
    console.log("Dashboard Page Title: ", await page.title());
    console.log("Dashboard Page Url: ", page.url());

    await dashboardPage.assertDashboardTextTitle(dashboardTitle!);

    const userAccountName = await dashboardPage.getUserAccountNameText();
    console.log("User Account Name: ", userAccountName);

    await dashboardPage.assertUserAccountName(userAccountName!);
  });
});

test.describe("ESS_1", () => {
  test.use({ storageState: "./playwright/.auth/ess_1.json" });
  test("Login as ess_1 (ankit)", async ({ page, loginPage, dashboardPage }) => {
    loginPage.gotoOrangeHRM();
    const dashboardTitle = await dashboardPage.getDashboardTitleText();
    console.log("Dashboard Title: ", dashboardTitle);
    console.log("Dashboard Page Title: ", await page.title());
    console.log("Dashboard Page Url: ", page.url());

    await dashboardPage.assertDashboardTextTitle(dashboardTitle!);

    const userAccountName = await dashboardPage.getUserAccountNameText();
    console.log("User Account Name: ", userAccountName);

    await dashboardPage.assertUserAccountName(userAccountName!);
  });
});

test.describe("ESS_2", () => {
  test.use({ storageState: "./playwright/.auth/ess_2.json" });
  test("Login as ess_2 (geeta)", async ({ page, loginPage, dashboardPage }) => {
    loginPage.gotoOrangeHRM();
    const dashboardTitle = await dashboardPage.getDashboardTitleText();
    console.log("Dashboard Title: ", dashboardTitle);
    console.log("Dashboard Page Title: ", await page.title());
    console.log("Dashboard Page Url: ", page.url());

    await dashboardPage.assertDashboardTextTitle(dashboardTitle!);

    const userAccountName = await dashboardPage.getUserAccountNameText();
    console.log("User Account Name: ", userAccountName);

    await dashboardPage.assertUserAccountName(userAccountName!);
  });
});
