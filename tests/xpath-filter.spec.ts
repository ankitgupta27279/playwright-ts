import {test, expect} from '@playwright/test'


test('xpah filter test', async ({page})=>{
    await page.goto("https://www.makemytrip.com/");
    await page.pause();
    await page.locator("//div[contains(@class, 'entryPointsGrid')]")
        .filter({has: page.locator('.entryPointsGrid__item')})
        .filter({hasText:'Flight Status'})
        .click();
});


// <div class="entryPointsGrid entryPointsGrid--desktop entryPointsGrid--withDivider">…</div> aka locator('div').filter({ hasText: /^Flight Status$/ }).first()
// <div class="entryPointsGrid__row">…</div> aka locator('div').filter({ hasText: /^Flight Status$/ }).nth(1)