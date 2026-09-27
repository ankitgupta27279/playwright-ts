import {test, expect, Locator} from '@playwright/test'

let username_locator: Locator;
let password_locator: Locator;
let login_locator: Locator;

test.beforeAll(async()=>{
    console.log("in beforeAll");
});
test.beforeEach(async({page})=>{
    console.log("in before each");
    username_locator=page.locator("#user-name")
    password_locator=page.locator("#password")
    login_locator=page.getByRole("button", {name: "Login"});
    // await page.goto("https://www.saucedemo.com/");
    await page.goto("/");
    await expect(page).toHaveTitle("Swag Labs");
    await expect(username_locator).toHaveAttribute("placeholder", "Username")
    await expect(password_locator).toHaveAttribute("placeholder", "Password");
});
test.afterAll(async()=>{
    console.log("in afterAll");
});
test.afterEach(async({page})=>{
    console.log("in after each");
    await login_locator.click();
    await expect(page).toHaveURL(/\/inventory\.html$/);
    // await page.pause();
    await page.close();
});
test("open saucedemo with valid credentials", async ()=>{
    await username_locator.fill("standard_user");
    await password_locator.fill("secret_sauce");
});

test("open saucedemo with invalid username", async ()=>{
    await username_locator.fill("standarder");
    await password_locator.fill("secret_sauce");
});

test("open saucedemo with invalid password", async ()=>{
    await username_locator.fill("standard_user");
    await password_locator.fill("secret_uce");
});
