//  @tracking
//! Re-Solved Times: 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//// var search = function (nums, target) {
////    return nums.indexOf(target)
//// };

var search = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      return i;
    }
  }
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); // 4
