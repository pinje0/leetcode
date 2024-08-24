/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
    let counter = 0

    for (let i = 0; i < nums.length; i++) {
        if ((nums[i] + 1) % 3 === 0 || (nums[i] - 1) % 3 === 0) {
            counter++
        }
    }

    return counter
}

console.log(minimumOperations([1, 2, 3, 4])) // 3

// Output: 3
// Explanation:
// All array elements can be made divisible by 3 using 3 operations:
// Subtract 1 from 1.
// Add 1 to 2.

console.log(minimumOperations([3, 6, 9]))
