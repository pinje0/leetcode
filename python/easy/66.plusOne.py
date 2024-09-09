from typing import List


class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        to_str = "".join(str(x) for x in digits)

        increment_str = int(to_str) + 1
        increment_str = str(increment_str)

        res = [int(y) for y in increment_str]

        return res


if __name__ == "__main__":
    solution = Solution()
    print(solution.plusOne([1, 2, 3]))  # [1,2,4]
