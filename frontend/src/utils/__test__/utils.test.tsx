import { addToShoppingCartLogic } from "../utils"

const name = "ameer"
const lastName = "alaswad"
const kalb = (name: string, lastName: string) => {
    if (name.startsWith("A")) {
        return true
    }
    if (name.length > 10) {
        return false
    }
    if (typeof name === "string") {
        return name + lastName
    }

}
it("3absko", () => {
    expect(kalb("rrrrrrrrrrrrrrrr", lastName)).toBe(false)
    expect(kalb(name, lastName)).toBe("ameeralaswad")
    expect(kalb("Ameer", lastName)).toBeTruthy()
})