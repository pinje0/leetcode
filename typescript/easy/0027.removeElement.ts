function removeElement(nums: number[], val: number): number {
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] == val) {
            nums.splice(i, 1)
        }
    }
    return nums.length
}

console.log(removeElement([3, 2, 2, 3], 3)) // 2
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)) // 5
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).
