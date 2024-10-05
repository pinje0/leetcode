from typing import List


class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        init = 0
        for x in nums:
            init = init ^ x

        return init


if __name__ == "__main__":
    solution = Solution()
    print(solution.singleNumber([2, 2, 1]))  # 1
