from typing import List


class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        counter: int = 0

        for x in grid:
            for y in x:
                if y < 0:
                    counter += 1

        return counter


if __name__ == "__main__":
    solution = Solution()
    print(
        solution.countNegatives(
            [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
        )
    )  # 8

# Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
# Output: 8
# Explanation: There are 8 negatives number in the matrix.
