/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let m = String(n)
        .split("")
        .reduce((acc, curr) => acc * curr)

    let s = String(n)
        .split("")
        .reduce((acc, curr) => Number(acc) + Number(curr))

    return m - s
}

console.log(subtractProductAndSum(234)) // 15
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

console.log(subtractProductAndSum(4421))
