import {test, expect} from '@playwright/test'


test('assertion test 1', async()=>{
    expect(1).toBe(1);
});
test('assertion test 2', async()=>{
    expect(1).toBe(2);
});
test('assertion test 3', async()=>{
    expect(1).toBe(1);
});
test('assertion test 4', async()=>{
    expect(1).toBe(3);
});

