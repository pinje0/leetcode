/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let init = 0

    for (let i = 0; i < nums.length; i++) {
        init = init ^ nums[i]
    }

    return init
}

// console.log(singleNumber([4, 1, 2, 1, 2])) // 4
// console.log(singleNumber([1])) // 1
// console.log(singleNumber([2, 2, 1])) // 1
console.log(
    singleNumber([
        -336, 513, -560, -481, -174, 101, -997, 40, -527, -784, -283, -336, 513, -560, -481, -174, 101, -997, 40, -527, -784, -283, 354,
    ])
) //354
