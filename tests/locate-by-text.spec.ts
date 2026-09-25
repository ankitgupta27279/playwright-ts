import {test, expect} from "@playwright/test"



// test("by text", async ({page})=>{
//    await page.goto("https://www.salesforce.com/uk/sales/free-trial/ee/"); 
//    await page.getByText("Start my free trial").click();
// //    await page.pause();
// });

test("by title", async ({page})=>{
   await page.goto("https://jqueryui.com/"); 
   await page.getByTitle("jQuery UI").first().click();
   await page.pause();
});