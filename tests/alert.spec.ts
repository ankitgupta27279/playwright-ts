import {test, expect} from '@playwright/test'


test('alert test', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.pause();
    //dialog handler
    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.accept();
    });
    await page.getByRole('button', {name: 'Click for JS Alert'}).click();
    await page.close();
});

test('alert test confirm', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.pause();
    //dialog handler
    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        // await dialog.accept();
        await dialog.dismiss();
    });
    await page.getByRole('button', {name: 'Click for JS Confirm'}).click();
    await page.close();
});

test('alert test confirm value', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts");
    await page.pause();
    //dialog handler
    page.on('dialog', async dialog=>{
        console.log(dialog.message());
        console.log(dialog.type());
        await dialog.accept("sunmoon");
        // await dialog.dismiss();
    });
    await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
    // const resultValueLocator=await page.locator('#result');
    await expect(page.locator('#result')).toContainText("sunmoon");
    await page.close();
});

