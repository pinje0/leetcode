function addStrings(num1: string, num2: string): string {
    return String(BigInt(num1) + BigInt(num2))
}

console.log(addStrings("11", "123")) // 134
// Input: num1 = "11", num2 = "123"
// Output: "134"
