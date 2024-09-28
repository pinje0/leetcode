class Solution:
    def differenceOfSums(self, n: int, m: int) -> int:
        num1 = 0
        num2 = 0

        for i in range(1, n + 1):
            if i % m != 0:
                num1 += i
            else:
                num2 += i

        return num1 - num2


if __name__ == "__main__":
    solution = Solution()
    print(solution.differenceOfSums(10, 3))  # 19


# Input: n = 10, m = 3
# Output: 19
# Explanation: In the given example:
# - Integers in the range [1, 10] that are not divisible by 3 are [1,2,4,5,7,8,10], num1 is the sum of those integers = 37.
# - Integers in the range [1, 10] that are divisible by 3 are [3,6,9], num2 is the sum of those integers = 18.
# We return 37 - 18 = 19 as the answer.
