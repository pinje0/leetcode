function subtractProductAndSum(n: number): number {
    let m = String(n)
        .split("")
        .reduce((acc, curr) => acc * Number(curr), 1)
    console.log(m)

    let s = String(n)
        .split("")
        .reduce((acc, curr) => acc + Number(curr), 0)

    return m - s
}

console.log(subtractProductAndSum(234)) // 15
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15
