import {test, expect} from "@playwright/test"


test("example for css selectors", async({page})=>{
    await page.goto("https://www.makemytrip.com/");
    // await page.locator("css=button:visible").first().click();
    await page.locator("css=button:visible").nth(3).click();
    await page.waitForTimeout(10000);
});
