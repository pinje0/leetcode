// @tracking
//! Re-Solved Times: 2

/**
 * @param {number[]} nums
 * @return {number}
 */

//* 1
////var numIdenticalPairs = function (nums) {
////  let count = 0;
////
////  for (let i = 0; i < nums.length; i++) {
////    for (let j = i + 1; j < nums.length; j++) {
////      if (nums[i] == nums[j]) {
////        count++;
////      }
////    }
////  }
////  return count;
////};

//* 2
var numIdenticalPairs = function (nums) {
  let counter = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        counter++;
      }
    }
  }
  return counter;
};

//TODO Given an array of integers nums, return the number of good pairs.
//TODO A pair (i, j) is called good if nums[i] == nums[j] and i < j.

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

console.log(numIdenticalPairs([1, 1, 1, 1])); // 6
console.log(numIdenticalPairs([1, 2, 3])); // 0
