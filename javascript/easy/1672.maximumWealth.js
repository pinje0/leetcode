/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  let max = accounts[0].reduce((a, b) => a + b);

  for (let i = 1; i < accounts.length; i++) {
    if (max < accounts[i].reduce((a, b) => a + b)) {
      max = accounts[i].reduce((a, b) => a + b);
    }
  }

  return max;
};

console.log(
  maximumWealth([
    [1, 5],
    [7, 3],
    [3, 5],
  ])
); // 10

console.log(
  maximumWealth([
    [1, 2, 3],
    [3, 2, 1],
  ])
); // 6

console.log(
  maximumWealth([
    [2, 8, 7],
    [7, 1, 3],
    [1, 9, 5],
  ])
);

// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.
