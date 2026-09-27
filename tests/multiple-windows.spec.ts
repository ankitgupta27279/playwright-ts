import {test, expect, chromium} from '@playwright/test'


test('handling multiple windows without fixtures', async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://homeloans.hdfc.bank.in/');
    
    await page.close();
    await context.close();
    await browser.close();
});

test('creating multiple pages with context', async ()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    const page2 = await context.newPage();
    await page1.goto('https://www.amazon.com/');
    await page2.goto('https://www.bing.com/');

    await page1.close();
    await page2.close();
    await context.close();
    await browser.close();
});

test.only('handling multiple windows/pages', async()=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.hdfc.com/');

    const pagePromise=context.waitForEvent('page');

    await page.getByRole('link', {name:'Blogs'}).first().click();
    const newPage = await pagePromise;
    await newPage.getByRole('button', {name: 'CONTINUE'}).first().click();

    await newPage.close();
    await page.close();
    await context.close();
    await browser.close();
});
