import{test} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'

test.skip('Temp Test',async({page})=>{
    const loginPage = new LoginPage(page);
    loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM("admin","$Admin$2025");
})