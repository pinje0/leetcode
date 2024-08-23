function countDigits(num: number): number {
    const s = String(num).split("")
    let counter: number = 0

    for (let i = 0; i < s.length; i++) {
        if (num % Number(s[i]) == 0) {
            counter++
        }
    }

    return counter
}

console.log(countDigits(121)) // 2
// Output: 2
// Explanation: 121 is divisible by 1, but not 2. Since 1 occurs twice as a digit, we return 2.

console.log(countDigits(1248)) // 4
