import {test} from './myfixture2'
import {expect} from '@playwright/test'


test('testing fixture 2', async({loginLogoutSetup})=>{
    await expect(loginLogoutSetup).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(loginLogoutSetup.locator(".title")).toHaveText('Products');
});

