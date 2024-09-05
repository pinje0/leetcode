/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let v1 = x.toString()
    let v2 = ""

    for (let i = v1.length - 1; i >= 0; i--) {
        v2 += v1[i]
    }

    return v1 == v2 ? true : false
}

// console.log(isPalindrome(121)) // true
// console.log(isPalindrome(-121)) // false
// console.log(isPalindrome(10)) // false
