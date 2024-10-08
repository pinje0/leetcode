class Solution:
    def addDigits(self, num: int) -> int:
        while num > 9:
            num = sum(int(digit) for digit in str(num))

        return num


if __name__ == "__main__":
    solution = Solution()
    print(solution.addDigits(38))  # 2
