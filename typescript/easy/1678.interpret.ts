function interpret(command: string): string {
    let replaceStr: string = command.replaceAll("()", "o")
    let res: string = ""

    for (let i = 0; i < replaceStr.length; i++) {
        if (replaceStr[i] !== "(" && replaceStr[i] !== ")") {
            res += replaceStr[i]
        }
    }

    return res
}

console.log(interpret("G()(al)")) // "Goal"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

console.log(interpret("G()()()()(al)")) // "Gooooal"
console.log(interpret("(al)G(al)()()G")) // "alGalooG"
