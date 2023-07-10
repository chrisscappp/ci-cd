import { plus } from "./plus"

describe("minus", function () {
    test("positive", () => {
        expect(plus(5, 5)).toBe(10)
    })

    test("negative", () => {
        expect(plus(-5, -5)).toBe(-10)
    })
})