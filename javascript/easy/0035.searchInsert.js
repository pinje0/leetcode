//  @tracking
//! Re-Solved Times: 2

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//* 1
// var searchInsert = function (nums, target) {
//   if (nums.includes(target)) {
//     return nums.indexOf(target);
//   } else {
//     nums.push(target);
//     const sorted = nums.sort((a, b) => a - b);

//     return sorted.indexOf(target);
//   }
// };

//* 2
var searchInsert = function (nums, target) {
  if (nums.includes(target)) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] == target) {
        return i;
      }
    }
  } else {
    const newNums = [...nums, target];
    const sortedArr = newNums.sort((a, b) => a - b);
    for (let i = 0; i < sortedArr.length; i++) {
      if (sortedArr[i] == target) {
        return i;
      }
    }
  }
};

//? Output
console.log(searchInsert([1, 3, 5, 6], 5)); // target = 5, output = 2 (true condition)
console.log(searchInsert([1, 3, 5, 6], 2)); // target = 2, output 1 (false condition
