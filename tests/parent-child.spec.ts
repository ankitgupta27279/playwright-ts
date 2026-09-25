import {test, expect} from '@playwright/test'


test('parent-child', async ({page})=>{
    await page.goto('https://www.makemytrip.com/');
    await page.pause();
    await page.locator("//div[@class='chHeaderContainer']//ul[contains(@class, 'headerIconsGap')]")
        .locator('[class="menu_Flights"]')
        .getByRole('link', {name:'Flights'})
        .click();

    // await page.locator('ul', {hasText: 'Flights'}).getByRole('link', {name: 'Visa'}).click();


    await page.close();
});
