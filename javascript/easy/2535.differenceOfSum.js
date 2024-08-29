/**
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
    let sumOfNums = nums.reduce((acc, curr) => acc + curr)
    let sumOfDigits = nums
        .join("")
        .split("")
        .reduce((acc, curr) => Number(acc) + Number(curr))

    return sumOfNums - sumOfDigits
}

console.log(differenceOfSum([1, 15, 6, 3])) // 9
// Output: 9
// Explanation:
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.
