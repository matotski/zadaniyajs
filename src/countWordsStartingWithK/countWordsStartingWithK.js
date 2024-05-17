function countWordsStartingWithK(str) {
  const words = str.toLowerCase().split(" ");
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("к")) {
      count++;
    }
  }
  return count;
}

module.exports = countWordsStartingWithK;
