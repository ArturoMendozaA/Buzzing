const FizzbuzzService = require("../../../app/lib/services/FizzbuzzService")
describe("test for Fizzbuzz Service", () => {
    test("Validacion score 1",() => {
        const explorer1 = {name: "Explorer1", score: 1}
         FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorer1.trick).toBe(1)
    })
    test("Validation score 3", ()=>{
    const explorer3 = {name: "Explorer3", score: 3}
    FizzbuzzService.applyValidationInExplorer(explorer3)
    expect(explorer.trick).toBe("FIZZ")
    })

})
