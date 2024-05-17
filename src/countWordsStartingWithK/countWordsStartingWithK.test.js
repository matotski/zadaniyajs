const countWordsStartingWithK = require("./countWordsStartingWithK");

describe("countWordsStartingWithK", () => {
  it('should return the number of words starting with "к" in a string', () => {
    expect(countWordsStartingWithK("Картина, книга и кошка")).toBe(3);
    expect(countWordsStartingWithK("Дом, солнце, река")).toBe(0);
    expect(countWordsStartingWithK("Кот, кит, компас")).toBe(3);
    expect(countWordsStartingWithK("")).toBe(0);
  });
});
