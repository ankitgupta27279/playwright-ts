import {test, expect} from '@playwright/test'


// test("open saucedemo with valid credentials", {tag:'@story1'}, async ({page})=>{
//     const username_locator=page.locator("#user-name")
//     const password_locator=page.locator("#password")
//     const login_locator=page.getByRole("button", {name: "Login"});
//     await page.goto("https://www.saucedemo.com/");
//     await expect(page).toHaveTitle("Swag Labs");
//     await expect(username_locator).toHaveAttribute("placeholder", "Username")
//     await username_locator.fill("standard_user");
//     await expect(password_locator).toHaveAttribute("placeholder", "Password");
//     await password_locator.fill("secret_sauce");
//     await login_locator.click();
//     await expect(page).toHaveURL(/\/inventory\.html$/);
//     // await page.pause();
//     await page.close();
// });

// test("open saucedemo with invalid username", {tag: ['@story2', '@story3']}, async ({page})=>{
//     const username_locator=page.locator("#user-name")
//     const password_locator=page.locator("#password")
//     const login_locator=page.getByRole("button", {name: "Login"});
//     await page.goto("https://www.saucedemo.com/");
//     await expect(page).toHaveTitle("Swag Labs");
//     await expect(username_locator).toHaveAttribute("placeholder", "Username")
//     await username_locator.fill("standard_ur");
//     await expect(password_locator).toHaveAttribute("placeholder", "Password");
//     await password_locator.fill("secret_sauce");
//     await login_locator.click();
//     await expect(page).toHaveURL(/\/inventory\.html$/);
//     // await page.pause();
//     await page.close();
// });

// test("open saucedemo with invalid password", {tag: '@story3'}, async ({page})=>{
//     const username_locator=page.locator("#user-name")
//     const password_locator=page.locator("#password")
//     const login_locator=page.getByRole("button", {name: "Login"});
//     await page.goto("https://www.saucedemo.com/");
//     await expect(page).toHaveTitle("Swag Labs");
//     await expect(username_locator).toHaveAttribute("placeholder", "Username")
//     await username_locator.fill("standard_user");
//     await expect(password_locator).toHaveAttribute("placeholder", "Password");
//     await password_locator.fill("secret_uce");
//     await login_locator.click();
//     await expect(page).toHaveURL(/\/inventory\.html$/);
//     // await page.pause();
//     await page.close();
// });


test.describe('test describe', {tag: '@reg'}, ()=>{
    test("open saucedemo with valid credentials", async ({page})=>{
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
        const username_locator=page.locator("#user-name")
        const password_locator=page.locator("#password")
        const login_locator=page.getByRole("button", {name: "Login"});
        await page.goto("https://www.saucedemo.com/");
        await expect(page).toHaveTitle("Swag Labs");
        await expect(username_locator).toHaveAttribute("placeholder", "Username")
        await username_locator.fill("standard_ur");
        await expect(password_locator).toHaveAttribute("placeholder", "Password");
        await password_locator.fill("secret_sauce");
        await login_locator.click();
        await expect(page).toHaveURL(/\/inventory\.html$/);
        // await page.pause();
        await page.close();
    });

    test("open saucedemo with invalid password", async ({page})=>{
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