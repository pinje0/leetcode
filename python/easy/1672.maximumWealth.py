from typing import List


class Solution:
    def maximumWealth(self, accounts: List[List[int]]) -> int:
        res = sum(accounts[0])

        for i in accounts:
            if res < sum(i):
                res = sum(i)

        return res


if __name__ == "__main__":
    solution = Solution()
    print(solution.maximumWealth([[1, 2, 3], [3, 2, 1]]))  # 6
    print(solution.maximumWealth([[1, 5], [7, 3], [3, 5]]))  # 10
    print(solution.maximumWealth([[2, 8, 7], [7, 1, 3], [1, 9, 5]]))  # 17
