import {test, expect} from '@playwright/test'


test('soft assertions', async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    const username_locator=page.locator("#user-name")
    const password_locator=page.locator("#password")
    // const login_locator=page.getByRole("button", {name: "Login"});
    await expect.soft(page).toHaveTitle("Swag Labs123");
    await expect(username_locator).toHaveAttribute("placeholder", "Username")
    await expect(password_locator).toHaveAttribute("placeholder", "Password");
});

