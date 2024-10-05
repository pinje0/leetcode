function addDigits(num: number): number {
    let sum: number = num
    let newArr: string[]

    while (sum > 9) {
        newArr = sum.toString().split("")
        sum = newArr.reduce((a, b) => Number(a) + Number(b), 0)
    }

    return sum
}

console.log(addDigits(38)) // 2

//todo Input: num = 38
//todo Output: 2
//todo Explanation: The process is
//todo 38 --> 3 + 8 --> 11
//todo 11 --> 1 + 1 --> 2
//todo Since 2 has only one digit, return it.
