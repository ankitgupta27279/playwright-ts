import {test, expect} from '@playwright/test'


test('page screenshot test', async ({page})=>{
    await page.goto("https://www.makemytrip.com/");
    // await page.pause();
    // await page.screenshot({path: 'tests/data/screenshot.png'});
    await page.screenshot({path: 'tests/data/screenshot_'+Date.now()+".png", fullPage:true});
    await page.close();
});

test('locator screenshot test', async ({page})=>{
    await page.goto("https://www.makemytrip.com/");
    // await page.pause();
    // await page.screenshot({path: 'tests/data/screenshot.png'});
    await page.getByRole('textbox').first().screenshot({path: 'tests/data/screenshot_'+Date.now()+'.png'});
    // await page.screenshot({path: 'tests/data/screenshot_'+Date.now()+".png", fullPage:true});
    await page.close();
});