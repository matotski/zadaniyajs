const sumEvenMultiplesOf3 = require("./sumEvenMultiplesOf3");

describe("sumEvenMultiplesOf3", () => {
  it("should return the sum of all even numbers divisible by 3 within a given range", () => {
    expect(sumEvenMultiplesOf3(1, 10)).toBe(6); // 6
    expect(sumEvenMultiplesOf3(6, 18)).toBe(36); // 6 + 12 + 18 = 36
    expect(sumEvenMultiplesOf3(10, 20)).toBe(36); // 12 + 18
    expect(sumEvenMultiplesOf3(1, 5)).toBe(0); // No numbers in range match criteria
  });
});
