import {test, expect} from '@playwright/test'


test("open saucedemo", async ({page})=>{
    const username_locator=page.locator("#user-name")
    const password_locator=page.locator("#password")
    const login_locator=page.getByRole("button", {name: "Login"});
    await page.goto("https://www.saucedemo.com/");
    await expect(page).toHaveTitle("Swag Labs");
    await expect(username_locator).toHaveAttribute("placeholder", "Username")
    await username_locator.fill("standard_user");
    await expect(password_locator).toHaveAttribute("placeholder", "Password");
    await password_locator.fill("secret_sauce");
    await login_locator.click();
    await expect(page).toHaveURL(/\/inventory\.html$/);
    // await page.pause();
    await page.close();
});