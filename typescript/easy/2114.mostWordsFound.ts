function mostWordsFound(sentences: string[]): number {
    const res: number[] = []

    for (let i = 0; i < sentences.length; i++) {
        res.push(sentences[i].split(" ").length)
    }

    return Math.max(...res)
}

console.log(mostWordsFound(["alice and bob love leetcode", "i think so too", "this is great thanks very much"])) // 6
console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"])) // 3
