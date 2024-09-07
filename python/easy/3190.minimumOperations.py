from typing import List


class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        counter: int = 0

        for i, num in enumerate(nums):
            if (num + 1) % 3 == 0 or (num - 1) % 3 == 0:
                counter += 1

        return counter


if __name__ == "__main__":
    solution = Solution()
    print(solution.minimumOperations([1, 2, 3, 4]))  # 3
