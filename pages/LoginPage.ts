
import { expect, Locator, Page } from "@playwright/test";

export class LoginPage{
    readonly page:Page;
    readonly usernameInput:Locator;
    readonly passwordInput:Locator;
    readonly loginButton:Locator;
    readonly dashboardHeading:Locator;
    constructor(page:Page){
        this.page = page;
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' })
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.dashboardHeading = page.locator('.oxd-topbar-header-title h6');
    }

    /**
     * open the URL into browser
     */
    async gotoOrangeHRM(){
        
        await this.page.goto(`${process.env.BASE_URL}`)
    }


    /**
     * To login into OrangeHRM Application
     * @param username 
     * @param password 
     */
    async loginOrangeHRM(username:string,password:string){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }



    
}