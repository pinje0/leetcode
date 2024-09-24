from typing import List


class Solution:
    def differenceOfSum(self, nums: List[int]) -> int:
        res_element = sum(nums)
        res_digit = sum(list(map(int, "".join([str(x) for x in nums]))))

        return res_element - res_digit


if __name__ == "__main__":
    solution = Solution()
    print(solution.differenceOfSum([1, 15, 6, 3]))  # 9

# The element sum of nums is 1 + 15 + 6 + 3 = 25.
# The digit sum of nums is 1 + 1 + 5 + 6 + 3 = 16.
# The absolute difference between the element sum and digit sum is |25 - 16| = 9.
