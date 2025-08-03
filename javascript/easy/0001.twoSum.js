//  @tracking
//! Re-Solved Times: 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] == target - nums[i]) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// };

// 2
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
