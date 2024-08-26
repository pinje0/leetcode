function differenceOfSums(n: number, m: number): number {
    let num1: number = 0
    let num2: number = 0

    for (let i = 1; i <= n; i++) {
        if (i % m !== 0) {
            num1 += i
        } else {
            num2 += i
        }
    }
    return num1 - num2
}

console.log(differenceOfSums(10, 3)) // 19
// Input: n = 10, m = 3
// Output: 19
// Explanation: In the given example:
// - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
// - Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
// We return 37 - 18 = 19 as the answer.

console.log(differenceOfSums(5, 6)) // 15
// Input: n = 5, m = 6
// Output: 15
// Explanation: In the given example:
// - Integers in the range [1, 5] that are not divisible by 6 are [1,2,3,4,5], num1 is the sum of those integers = 15.
// - Integers in the range [1, 5] that are divisible by 6 are [], num2 is the sum of those integers = 0.
// We return 15 - 0 = 15 as the answer.
