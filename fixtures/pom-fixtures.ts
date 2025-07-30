import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import {DashboardPage} from "../pages/DashboardPage"

type PomFixturesType = {
  loginPage: LoginPage;
  dashboardPage:DashboardPage;
};

// export cosnst test  = baseTest.extend<myPomFixturesType>({
//     loginPage: async({page},use) =>{
//         loginPageObj = new LoginPage(page);
//     }
// })

export const test  =  baseTest.extend<PomFixturesType>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  dashboardPage: async({page},use)=>{
    await use(new DashboardPage(page));
  }
});
