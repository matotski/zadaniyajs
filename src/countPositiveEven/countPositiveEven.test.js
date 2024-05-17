const countPositiveEven = require("./countPositiveEven");

describe("countPositiveEven", () => {
  it("should return the number of positive even numbers in an array", () => {
    expect(countPositiveEven([1, 2, 3, 4, 5])).toBe(2);
    expect(countPositiveEven([-2, -4, 0, 2, 4])).toBe(2);
    expect(countPositiveEven([1, 3, 5, 7])).toBe(0);
    expect(countPositiveEven([])).toBe(0);
  });
});
