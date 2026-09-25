import {test, expect} from "@playwright/test"


test("", async ({page})=>{
    // await page.goto("https://www.salesforce.com/uk/sales/free-trial/ee/");
    // await page.getByLabel("First name").fill("bhanu");
    // await page.pause();
    await page.goto("https://www.saucedemo.com/");
    await page.getByPlaceholder("Username").fill("japan");
    await page.pause();
});