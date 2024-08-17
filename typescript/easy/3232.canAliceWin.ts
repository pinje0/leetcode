function canAliceWin(nums: number[]): boolean {
    let oneDigit: number = 0
    let twoDigit: number = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 10) {
            oneDigit += nums[i]
        } else {
            twoDigit += nums[i]
        }
    }

    return oneDigit !== twoDigit ? true : false
}

console.log(canAliceWin([1, 2, 3, 4, 10])) // false
