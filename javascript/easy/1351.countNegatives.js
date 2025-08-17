// @tracking
//! Re-Solved Times: 2

/**
 * @param {number[][]} grid
 * @return {number}
 */

//* 1
////var countNegatives = function (grid) {
////  let count = 0;
////
////  for (let i = 0; i < grid.length; i++) {
////    for (let j = 0; j < grid[i].length; j++) {
////      if (grid[i][j] < 0) {
////        count++;
////      }
////    }
////  }
////  return count;
////
//// };

//* 2
var countNegatives = function (grid) {
  let counter = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] < 0) {
        counter++;
      }
    }
  }

  return counter;
};

// prettier-ignore
console.log(countNegatives([[4, 3, 2, -1],[3, 2, 1, -1],[1, 1, -1, -2],[-1, -1, -2, -3],])) // 8
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
