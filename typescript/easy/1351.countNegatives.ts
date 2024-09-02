function countNegatives(grid: number[][]): number {
    let count: number = 0

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] < 0) {
                count++
            }
        }
    }
    return count
}

console.log(countNegatives([ [4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3], ])) // 8
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
