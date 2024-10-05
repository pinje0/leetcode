/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums.includes(target)) {
        return nums.indexOf(target)
    } else {
        nums.push(target)
        const sorted = nums.sort((a, b) => a - b)

        return sorted.indexOf(target)
    }
}

console.log(searchInsert([1, 3, 5, 6], 5)) // target = 5, output = 2 ~ true
console.log(searchInsert([1, 3, 5, 6], 2)) // target = 2, output 1 ~ false
