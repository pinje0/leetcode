function numJewelsInStones(jewels: string, stones: string): number {
    let counter: number = 0

    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            counter++
        }
    }
    return counter
}

console.log(numJewelsInStones("aA", "aAAbbbb")) // 3
console.log(numJewelsInStones("z", "ZZ")) // 0
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
