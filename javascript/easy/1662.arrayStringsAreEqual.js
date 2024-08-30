/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function (word1, word2) {
    return word1.join("") === word2.join("") ? true : false
}

console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))

// Input: word1 = ["ab", "c"], word2 = ["a", "bc"]
// Output: true
// Explanation:
// word1 represents string "ab" + "c" -> "abc"
// word2 represents string "a" + "bc" -> "abc"
// The strings are the same, so return true.

console.log(arrayStringsAreEqual(["a", "cb"], ["ab", "c"])) // false
console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]))
