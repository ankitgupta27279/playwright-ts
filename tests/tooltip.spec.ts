import {test, expect} from '@playwright/test'


test('test tooltip 1', async ({page})=>{
    await page.goto("https://jqueryui.com/tooltip/");
    await page.pause();
    const frame1=await page.frameLocator("//iframe[@class='demo-frame']");
    const tooltipValue=await frame1.locator("#age").getAttribute('title');
    console.log(tooltipValue);
    await page.close();
});

