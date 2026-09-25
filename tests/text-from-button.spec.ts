import {test, expect} from '@playwright/test'


test('getting text from button', async({page})=>{
    await page.waitForLoadState('networkidle');
    await page.goto("https://www.salesforce.com/in/");
    // await page.pause();
    // const textValue=await page.getByRole('button', {name: 'Flight Status'}).textContent();
    // const textValue=await page.locator('.entryPointsGrid__text', {hasText: 'Flight Status'}).textContent();
    // console.log(textValue);
    const values=await page.locator("//button").allTextContents();
    console.log(values);
});
