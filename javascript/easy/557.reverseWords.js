/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let str = ""

    for (let i = s.length - 1; i >= 0; i--) {
        str += s[i]
    }

    return str.split(" ").reverse().join(" ")
}

console.log(reverseWords("Let's take LeetCode contest"))
// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

console.log(reverseWords("Mr Ding"))
// Example 2:
// Input: s = "Mr Ding"
// Output: "rM gniD"
