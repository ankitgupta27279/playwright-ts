import {test, expect} from '@playwright/test'


test.describe('two tests', ()=>{
    test("open saucedemo with valid credentials", async ({page})=>{
        test.slow();
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

    test("open saucedemo with invalid username", async ({page})=>{
        test.slow();
        const username_locator=page.locator("#user-name")
        const password_locator=page.locator("#password")
        const login_locator=page.getByRole("button", {name: "Login"});
        await page.goto("https://www.saucedemo.com/");
        await expect(page).toHaveTitle("Swag Labs");
        await expect(username_locator).toHaveAttribute("placeholder", "Username")
        await username_locator.fill("standarder");
        await expect(password_locator).toHaveAttribute("placeholder", "Password");
        await password_locator.fill("secret_sauce");
        await login_locator.click();
        await expect(page).toHaveURL(/\/inventory\.html$/);
        // await page.pause();
        await page.close();
    });

    test("open saucedemo with invalid password", async ({page})=>{
        test.slow();
        const username_locator=page.locator("#user-name")
        const password_locator=page.locator("#password")
        const login_locator=page.getByRole("button", {name: "Login"});
        await page.goto("https://www.saucedemo.com/");
        await expect(page).toHaveTitle("Swag Labs");
        await expect(username_locator).toHaveAttribute("placeholder", "Username")
        await username_locator.fill("standard_user");
        await expect(password_locator).toHaveAttribute("placeholder", "Password");
        await password_locator.fill("secret_uce");
        await login_locator.click();
        await expect(page).toHaveURL(/\/inventory\.html$/);
        // await page.pause();
        await page.close();
    });
});
