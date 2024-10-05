function reverseWords(s: string): string {
    let str: string = ""

    for (let i = s.length - 1; i >= 0; i--) {
        str += s[i]
    }

    return str.split(" ").reverse().join(" ")
}

// Example 1:
console.log(reverseWords("Let's take LeetCode contest"))
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
console.log(reverseWords("Mr Ding"))
// Input: s = "Mr Ding"
// Output: "rM gniD"
