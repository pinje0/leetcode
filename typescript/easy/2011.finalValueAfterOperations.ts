function finalValueAfterOperations(operations: string[]): number {
    let x: number = 0

    for (let i = 0; i < operations.length; i++) {
        if (operations[i] == "X++" || operations[i] == "++X") {
            x++
        } else {
            x--
        }
    }
    return x
}

console.log(finalValueAfterOperations(["--X", "X++", "X++"])) // 1
console.log(finalValueAfterOperations(["++X", "++X", "X++"]))
