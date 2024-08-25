function numberOfSteps(num: number): number {
    let counter = 0
    while (num > 0) {
        if (num % 2 == 0) {
            num = num / 2
            counter++
        } else {
            num = num - 1
            counter++
        }
    }
    return counter
}

console.log(numberOfSteps(14)) // 6
// Output: 6
// Explanation:
// Step 1) 14 is even; divide by 2 and obtain 7.
// Step 2) 7 is odd; subtract 1 and obtain 6.
// Step 3) 6 is even; divide by 2 and obtain 3.
// Step 4) 3 is odd; subtract 1 and obtain 2.
// Step 5) 2 is even; divide by 2 and obtain 1.
// Step 6) 1 is odd; subtract 1 and obtain 0.

console.log(numberOfSteps(123)) // 12
