/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    //* Solution 1
    // for (let i = digits.length - 1; i >= 0; i--) {
    //     digits[i]++
    //     if (digits[i] > 9) {
    //         digits[i] = 0
    //     } else {
    //         return digits
    //     }
    // }
    // digits.unshift(1)
    // return digits

    //* Solution 2
    let j = BigInt(digits.join("")) + BigInt(1)

    let s = String(j).split("")

    return s
}

console.log(plusOne([1, 2, 3])) // [1,2,4]
