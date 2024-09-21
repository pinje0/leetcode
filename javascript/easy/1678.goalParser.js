/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let r = command.replaceAll("()", "o")
    let str = ""

    for (let i = 0; i < r.length; i++) {
        if (r[i] == "(" || r[i] == ")") {
            r[i] = ""
        } else {
            str += r[i]
        }
    }

    return str
}

console.log(interpret("G()(al)")) // "Goal"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".

console.log(interpret("G()()()()(al)")) // "Gooooal"

console.log(interpret("(al)G(al)()()G"))
