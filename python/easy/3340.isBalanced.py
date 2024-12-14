class Solution:
    def isBalanced(self, num: str) -> bool:
        evenSum: int = 0
        oddSum: int = 0

        for i, n in enumerate(num):
            if i % 2 == 0:
                evenSum += int(n)
            else:
                oddSum += int(n)

        return True if evenSum == oddSum else False


if __name__ == "__main__":
    solution = Solution()
    print(solution.isBalanced("1234"))  # false
    print(solution.isBalanced("24123"))  # true
