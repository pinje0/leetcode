/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    const sortedArr = []
    let split = s.split(" ")

    for (let i = 0; i < split.length; i++) {
        if (/\b\w+\b/g.test(split[i])) {
            sortedArr.push(split[i])
        }
    }

    return sortedArr[sortedArr.length - 1].length
}

console.log(lengthOfLastWord("Hello World")) // 5 - World
// console.log(lengthOfLastWord("   fly me   to   the moon  ")) // 4 - moon
