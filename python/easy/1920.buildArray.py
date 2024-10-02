from typing import List


class Solution:
    def buildArray(self, nums: List[int]) -> List[int]:
        return [nums[i] for i in nums]


if __name__ == "__main__":
    solution = Solution()
    print(solution.buildArray([0, 2, 1, 5, 3, 4]))  # [0,1,2,4,5,3]
