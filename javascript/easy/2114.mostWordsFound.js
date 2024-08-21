/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function (sentences) {
    let temp = []
    for (let i = 0; i < sentences.length; i++) {
        temp.push(sentences[i].split(" ").length)
    }

    return Math.max(...temp)
}

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])) // 6
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"])) // 3

