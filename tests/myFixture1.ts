import {test as base} from '@playwright/test';


type envURL={
    qaURL: string
}

export const test=base.extend<envURL>({
    qaURL: async({}, use)=>{
        const qaURL = "https://www.bing.com/";
        console.log('before fixture');
        await use(qaURL)
        console.log('after fixture');
    }
});

