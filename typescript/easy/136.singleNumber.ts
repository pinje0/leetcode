function singleNumber(nums: number[]): number {
    let accum: number = 0

    for (let i = 0; i < nums.length; i++) {
        accum = accum ^ nums[i]
    }

    return accum
}
