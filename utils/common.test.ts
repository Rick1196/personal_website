import { replaceTokens } from "./common";

describe('Utils', ()=>{
    beforeAll(() => {
        jest.useFakeTimers();     
        jest.setSystemTime(new Date(2025, 1, 27));
    });
    it("REPLACE TOKENS", () =>{
        const test = "some random text {{age}} more random text";
        const result = "some random text 28 more random text"
        expect(replaceTokens(test)).toEqual(result)
    })
})