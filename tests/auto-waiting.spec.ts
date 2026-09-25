import {test, expect} from '@playwright/test'


test('testing auto-waiting', async({page})=>{
    await page.goto("http://uitestingplayground.com/ajax");
    await page.getByRole('button', {name: 'Button Triggering AJAX Request'}).click();
    await page.waitForTimeout(16000);
    await page.locator('.bg-success').click();
    await page.close();
});

test('testing auto-waiting 2', async({page})=>{
    // test.setTimeout(20000);
    test.slow(); // 3 times of timeout value for this test
    await page.goto("http://uitestingplayground.com/ajax");
    await page.getByRole('button', {name: 'Button Triggering AJAX Request'}).click();
    // await page.waitForSelector('.bg-success'); 
    await page.locator('.bg-success').waitFor({state: 'visible'});
    await page.locator('.bg-success').click({timeout: 20000});
    await page.close();
});

test('testing auto-waiting 3', async({page})=>{
    await page.goto("http://uitestingplayground.com/ajax");
    await page.getByRole('button', {name: 'Button Triggering AJAX Request'}).click();
    // const value = await page.locator('.bg-success').textContent();
    // const value = await page.locator('.bg-success').allTextContents();
    // console.log(value);
    await expect(page.locator('.bg-success')).toHaveText('Data loaded with AJAX get request.', {timeout: 20000});
    await page.close();
});
