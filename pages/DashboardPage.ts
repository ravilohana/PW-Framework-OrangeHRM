import { expect, Locator, Page } from "@playwright/test";



export class DashboardPage{
    readonly page:Page;
    readonly dashboardTitleText:Locator;
    readonly userAccountNameText:Locator;

    constructor(page:Page){
        this.page = page;
        this.dashboardTitleText = this.page.getByRole('heading',{name:'Dashboard'});
        this.userAccountNameText = this.page.locator('.oxd-userdropdown-name');
    }

    async getDashboardTitleText(){
        return await this.dashboardTitleText.textContent();
    }

    async assertDashboardTextTitle(titleText:string){
         return  expect(await this.getDashboardTitleText()).toEqual(titleText);
    }

    async getUserAccountNameText(){
        return await this.userAccountNameText.textContent();
    }

    async assertUserAccountName(userAccountName:string){
        return  expect(await this.getUserAccountNameText()).toEqual(userAccountName);
    }





}