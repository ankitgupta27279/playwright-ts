import {test, expect, Frame} from '@playwright/test'


test('frame test - using framelocator', async ({page})=>{
    await page.goto("https://jqueryui.com/tooltip/");
    await page.pause();
    const frame1=await page.frameLocator("//iframe[@class='demo-frame']");
    await frame1.locator("#age").fill("27");
    await page.close();
});

// TODO: need to fix
test('frame test - using frame', async ({page})=>{
    await page.goto("https://jqueryui.com/tooltip/");
    await page.pause();
    const frame2=await page.frame({url: "https://jqueryui.com/tooltip/resources/demos/tooltip/default.html"});
    await frame2?.locator("#age").fill("27");
    await page.close();
});
