from typing import List


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        return nums.index(target) if target in nums else -1


if __name__ == "__main__":
    solution = Solution()
    print(solution.search([-1, 0, 3, 5, 9, 12], 9))  # 4
