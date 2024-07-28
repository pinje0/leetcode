function plusOne(digits: number[]): number[] {
    let s: bigint = BigInt(digits.join("")) + BigInt(1)
    let j: string[] = String(s).split("")

    return j.map(Number)
}

console.log(plusOne([1, 2, 3]))
