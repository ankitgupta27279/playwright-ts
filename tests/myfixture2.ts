import {test as base, Page} from '@playwright/test'


type hooksFixture = {
    loginLogoutSetup: Page
}


export const test = base.extend<hooksFixture>({
    loginLogoutSetup: async({ page }, use) => {
        // const loginLogoutSetup=undefined;
        await page.goto('https://www.saucedemo.com/');
        // await page.pause();
        await page.locator('#user-name').fill('standard_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await use(page)
        await page.locator('#react-burger-menu-btn').click();
        await page.locator('#logout_sidebar_link').click();
    }   
});
