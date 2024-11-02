/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  const wordCount = new Map();

  const splitWord = paragraph.toLowerCase().match(/\w+/g);

  for (let i = 0; i < splitWord.length; i++) {
    if (!banned.includes(splitWord[i])) {
      const count = wordCount.get(splitWord[i]) || 0;
      wordCount.set(splitWord[i], count + 1);
    }
  }

  let mostCommon = "";
  let maxCount = 0;

  for (const [word, count] of wordCount.entries()) {
    if (count > maxCount) {
      maxCount = count;
      mostCommon = word;
    }
  }

  return mostCommon;
};

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"])); // ball
