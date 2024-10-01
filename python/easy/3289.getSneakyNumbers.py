from typing import List


class Solution:
    def getSneakyNumbers(self, nums: List[int]) -> List[int]:
        return list(set([x for x in nums if nums.count(x) > 1]))


if __name__ == "__main__":
    solution = Solution()
    print(solution.getSneakyNumbers([0, 1, 1, 0]))  # [0,1]
    print(solution.getSneakyNumbers([0, 3, 2, 1, 3, 2]))  # [2,3]
