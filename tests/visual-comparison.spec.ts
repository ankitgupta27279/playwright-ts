import {test, expect} from '@playwright/test'


test("testing visual scenarios", async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.locator("#user-name").fill("bhanu");
    await expect(page).toHaveScreenshot();
    await page.close();
});

