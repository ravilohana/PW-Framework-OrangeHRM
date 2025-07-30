import { Browser, chromium } from "@playwright/test";
import { test } from "../fixtures/common-utils-fixture";

test.describe.serial("Setup for Auth for users", () => {
  test("Global setup for ADMIN_1 (John Snow) login", async ({
    page,
    loginPage,
    commonUtilsFixture,
  }) => {
    const user_name: string = commonUtilsFixture.decryptData(
      process.env.USER_NAME_ADMIN_1!
    );
    const password: string = commonUtilsFixture.decryptData(
      process.env.ADMIN_1_PASSWORD!
    );
    await loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM(user_name, password);
    await page.waitForURL(
      `${process.env.BASE_URL}/web/index.php/dashboard/index`
    );

    loginPage.gotoOrangeHRM();
    await page.context().storageState({
      path: "./playwright/.auth/admin_1.json",
    });
  });

  test("Global setup for ADMIN_2 (lohana) login", async ({
    page,
    loginPage,
    commonUtilsFixture,
  }) => {
    const user_name: string = commonUtilsFixture.decryptData(
      process.env.USER_NAME_ADMIN_2!
    );
    const password: string = commonUtilsFixture.decryptData(
      process.env.ADMIN_2_PASSWORD!
    );
    await loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM(user_name, password);
    await page.waitForURL(
      `${process.env.BASE_URL}/web/index.php/dashboard/index`
    );

    loginPage.gotoOrangeHRM();
    await page.context().storageState({
      path: "./playwright/.auth/admin_2.json",
    });
  });

  test("Global setup for ESS_1 (ankit) login", async ({
    page,
    loginPage,
    commonUtilsFixture,
  }) => {
    const user_name: string = commonUtilsFixture.decryptData(
      process.env.USER_NAME_ESS_1!
    );
    const password: string = commonUtilsFixture.decryptData(
      process.env.ESS_1_PASSWORD!
    );
    await loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM(user_name, password);
    await page.waitForURL(
      `${process.env.BASE_URL}/web/index.php/dashboard/index`
    );

    loginPage.gotoOrangeHRM();
    await page.context().storageState({
      path: "./playwright/.auth/ess_1.json",
    });
  });

  test("Global setup for ESS_2 (geeta) login", async ({
    page,
    loginPage,
    commonUtilsFixture,
  }) => {
    const user_name: string = commonUtilsFixture.decryptData(
      process.env.USER_NAME_ESS_2!
    );
    const password: string = commonUtilsFixture.decryptData(
      process.env.ESS_2_PASSWORD!
    );
    await loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM(user_name, password);
    await page.waitForURL(
      `${process.env.BASE_URL}/web/index.php/dashboard/index`
    );

    loginPage.gotoOrangeHRM();
    await page.context().storageState({
      path: "./playwright/.auth/ess_2.json",
    });
  });
});
