import {test} from '../fixtures/pom-fixtures';

test.skip('Temp Test',async({loginPage})=>{
    loginPage.gotoOrangeHRM();
    await loginPage.loginOrangeHRM("admin","$Admin$2025");
})