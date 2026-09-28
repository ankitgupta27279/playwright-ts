import {test, expect} from "@playwright/test";


// test('Get Request Example', async({request})=>{
//     const response=await request.get("https://api.restful-api.dev/objects/7");
//     console.log(await response.json());
//     // console.log(await response.status());
//     // await expect(await response.status()).toBe(200);
//     let responseData = await response.json();
//     let nameValue = responseData.name;
//     console.log(nameValue);
//     let yearValue=responseData.data.year;
//     console.log(yearValue);
// });

test('', async({request})=>{
    const response=await request.get("https://api.restful-api.dev/objects?id=7");
    // console.log(await response.json());
    // console.log(await response.status());
    // await expect(await response.status()).toBe(200);
    let responseData = await response.json();
    let nameValue = responseData.name;
    console.log(nameValue);
    let yearValue=responseData.data.year;
    console.log(yearValue);
});

