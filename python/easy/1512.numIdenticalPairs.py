from typing import List


class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        counter: int = 0
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[i] == nums[j]:
                    counter += 1

        return counter


if __name__ == "__main__":
    solution = Solution()
    print(solution.numIdenticalPairs([1, 2, 3, 1, 1, 3]))  # 4

# Input: nums = [1,2,3,1,1,3]
# Output: 4
# Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
