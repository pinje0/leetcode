/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    return String(BigInt(num1) + BigInt(num2))
}

console.log(addStrings("11", "123")) // 134
// Input: num1 = "11", num2 = "123"
// Output: "134"
