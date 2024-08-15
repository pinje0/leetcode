/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let res = []
    for (let i = 0; i < words.length; i++) {
        console.log(words[i])
        if (words[i].includes(x)) {
            res.push(i)
        }
    }
    return res
}

console.log(findWordsContaining(["leet", "code"], "e")) // [0, 1]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a")) // [0, 2]
