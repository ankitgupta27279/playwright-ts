import {test, expect} from '@playwright/test'


test("Delete Testing", async({request})=>{
    const response=await request.delete("https://api.restful-api.dev/objects/ff808181a09d98f701a0e655b5d62b07");
    let responseData=await response.json();
    console.log(responseData.message);
});

