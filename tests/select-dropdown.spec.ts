import {test, expect} from '@playwright/test'


test('test dropdown', async ({page})=>{
    await page.goto("https://www.salesforce.com/products/free-trial/developer/");
    // await page.pause();
    await page.getByRole('combobox').selectOption('Haiti');
    await page.getByLabel('Country/region').selectOption('Poland');
    await page.getByLabel('Country/region').selectOption({value: 'FJ'})
    await page.getByLabel('Country/region').selectOption({index: 4})
    await page.getByLabel('Country/region').selectOption({label: 'India'})

    const ddOptions=await page.getByLabel('Country/region').getByRole('option').allTextContents();
    await console.log(ddOptions.length)
    await expect(ddOptions.length).toBe(245);
    await expect(ddOptions).toContain('India');
    for(let value of ddOptions){
        console.log(value);
    }
    await page.close();
});
