/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const numCounter = {};
  let hasDuplicate = false;

  for (let i = 0; i < nums.length; i++) {
    if (numCounter[nums[i]]) {
      numCounter[nums[i]]++;
      hasDuplicate = true;
    } else {
      numCounter[nums[i]] = 1;
    }
  }

  return hasDuplicate == true ? true : false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

console.log(containsDuplicate([1, 2, 3, 4])); // false

console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
