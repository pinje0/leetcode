function maximumWealth(accounts: number[][]): number {
  return Math.max(...accounts.map((account) => account.reduce((a, b) => a + b)));
}

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
