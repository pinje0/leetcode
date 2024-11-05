function isPrefixOfWord(sentence: string, searchWord: string): number {
  const splitWord = sentence.split(" ");

  for (let i = 0; i < splitWord.length; i++) {
    if (splitWord[i].startsWith(searchWord)) {
      return i + 1;
    }
  }

  return -1;
}

console.log(isPrefixOfWord("i love eating burger", "burg")); // 4
// Input: sentence = "i love eating burger", searchWord = "burg"
// Output: 4
// Explanation: "burg" is prefix of "burger" which is the 4th word in the sentence.

console.log(isPrefixOfWord("this problem is an easy problem", "pro")); // 2

console.log(isPrefixOfWord("i am tired", "you")); // -1
