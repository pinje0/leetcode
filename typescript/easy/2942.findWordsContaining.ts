function findWordsContaining(words: string[], x: string): number[] {
    const arr: number[] = []

    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            arr.push(i)
        }
    }
    return arr
}

console.log(findWordsContaining(["leet", "code"], "e")) // [0, 1]
console.log(findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a")) // [0, 2]
