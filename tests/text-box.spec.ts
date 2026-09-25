import {test, expect} from '@playwright/test'


test('text box testing', async({page})=>{
    const username_field=page.getByRole('textbox', {name: 'Username'})
    await page.goto('https://www.saucedemo.com/');
    // await page.pause();
    await username_field.fill('bread')
    await username_field.clear()
    await username_field.fill('butter')
    // const inputValue=await username_field.inputValue();
    // console.log(inputValue);
    await expect(await username_field.inputValue()).toEqual("butter")
    await page.close();
});
