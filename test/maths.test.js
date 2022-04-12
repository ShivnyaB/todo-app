// "describe()" -> Testing Suites : containers for various other testing specs
// "it()" -> Testing Specs -> function to write the assertions

const assert = require("assert");
const { sum, div } = require("../src/maths");

describe("Test Maths File", () => {
    it("Should return the sum of given two numbers", () => {
        const result = sum(2,4);
        assert.equal(result, 6, "Result should be 6")
    })
    it("Should return 0,if n1 is 0", () => {
        const result = div(0,4);
        assert.equal(result, 0, "Actual should be 0")
    })
    it("Should return 0, if number 2 is supplied as 0", () => {
        const result = div(50,0);
        assert.equal(result, 0, "Actual should be 0")
    })
    it("Should return 10 if divide 50 by 5", () => {
        const result = div(50,5);
        assert.equal(result, 10, "Actual should be 5")
    })

   
})