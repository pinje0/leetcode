class Solution:
    def smallestEvenMultiple(self, n: int) -> int:
        return n if n % 2 == 0 else n * 2


if __name__ == "__main__":
    solution = Solution()
    print(solution.smallestEvenMultiple(5))

# Explanation: The smallest multiple of both 5 and 2 is 10.
