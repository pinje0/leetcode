import math


class Solution:
    def mySqrt(self, x: int) -> int:
        return math.floor(math.sqrt(x))


if __name__ == "__main__":
    solution = Solution()
    print(solution.mySqrt(4))  # 2
