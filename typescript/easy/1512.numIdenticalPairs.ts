function numIdenticalPairs(nums: number[]): number {
    let count: number = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                count++
            }
        }
    }
    return count
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])) // 4
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

console.log(numIdenticalPairs([1, 1, 1, 1])) // 6
console.log(numIdenticalPairs([1, 2, 3])) // 0
