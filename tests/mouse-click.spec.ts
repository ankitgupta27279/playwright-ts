import {test, expect} from '@playwright/test'


test('testing double click', async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.pause();
    await page.locator('#login-button').dblclick();
    await page.close();
});

test('testing right click', async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.pause();
    await page.locator('#login-button').click({button: 'right'});
    await page.close();
});

test('testing hover', async({page})=>{
    await page.goto("https://www.emirates.com/in/english/book/");
    await page.pause();
    await page.locator('(//*[text()="About booking online"])[1]').hover();
    await page.close();
});

//pressSequentially
//press