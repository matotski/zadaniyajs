const minAbs = require("./minAbs");

describe("minAbs", () => {
  it("should return the minimum absolute value of three numbers", () => {
    expect(minAbs(1, 2, 3)).toBe(1);
    expect(minAbs(-1, -2, -3)).toBe(1);
    expect(minAbs(-5, 2, 4)).toBe(2);
    expect(minAbs(0, -1, 1)).toBe(0);
  });
});
