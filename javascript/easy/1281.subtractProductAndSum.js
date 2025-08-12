// @tracking
//! Re-Solved Times: 2

/**
 * @param {number} n
 * @return {number}
 */

//* 1
////var subtractProductAndSum = function (n) {
////  let m = String(n)
////    .split('')
////    .reduce((acc, curr) => acc * curr);
////
////  let s = String(n)
////    .split('')
////    .reduce((acc, curr) => Number(acc) + Number(curr));
////
////  return m - s;
////};

//* 2
var subtractProductAndSum = function (n) {
  const nums = [];

  for (let i = 0; i < String(n).length; i++) {
    nums.push(Number(String(n)[i]));
  }

  // Substract
  const subtract = nums.reduce((acc, curr) => acc * curr);

  // Sums
  const sum = nums.reduce((acc, curr) => acc + curr);

  return subtract - sum;
};

console.log(subtractProductAndSum(234)); // 15
// Output: 15
// Explanation:
// Product of digits = 2 * 3 * 4 = 24
// Sum of digits = 2 + 3 + 4 = 9
// Result = 24 - 9 = 15

// console.log(subtractProductAndSum(4421))
