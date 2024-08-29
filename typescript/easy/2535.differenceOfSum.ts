function differenceOfSum(nums: number[]): number {
    let sumOfNums: number = nums.reduce((acc, curr) => acc + curr, 0)
    let sumOfDigits = nums
        .join("")
        .split("")
        .reduce((acc, curr) => acc + Number(curr), 0)

    console.log(sumOfNums)
    console.log(sumOfDigits)

    return sumOfNums - sumOfDigits
}

console.log(differenceOfSum([1, 15, 6, 3])) // 9
// Output: 9
// Explanation:
// The element sum of nums is 1 + 15 + 6 + 3 = 25.
// The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
// The absolute difference between the element sum and digit sum is |25 - 16| = 9.
