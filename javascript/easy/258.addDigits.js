/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    let sum = num
    let newArr = []

    while (sum > 9) {
        newArr = sum.toString().split("")
        sum = newArr.reduce((a, b) => Number(a) + Number(b))
    }

    return sum
}

console.log(addDigits(38)) // 2

//todo Input: num = 38
//todo Output: 2
//todo Explanation: The process is
//todo 38 --> 3 + 8 --> 11
//todo 11 --> 1 + 1 --> 2
//todo Since 2 has only one digit, return it.
