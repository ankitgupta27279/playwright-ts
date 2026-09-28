import{test, expect} from '@playwright/test';


test("POST Test", async({request})=>{
    const response=await request.post("https://api.restful-api.dev/objects", 
        {
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                "name": "Apple MacBook Pro 16",
                "data": {
                    "year": 2026,
                    "price": 18489.99,
                    "CPU model": "Intel Core i17",
                    "Hard disk size": "234 TB"
                }
            },
        }
    );
    let responseData=await (await response).json();
    console.log(responseData);
    let cpuModel=responseData['data']['CPU model'];
    console.log(cpuModel);
});
