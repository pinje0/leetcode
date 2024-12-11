class Solution:
    def sumOfMultiples(self, n: int) -> int:
        res: int = 0

        for num in range(1, n + 1):
            if num % 3 == 0 or num % 5 == 0 or num % 7 == 0:
                res += num

        return res


if __name__ == "__main__":
    solution = Solution()
    print(solution.sumOfMultiples(7))  # 21
    print(solution.sumOfMultiples(10))  # 40
    print(solution.sumOfMultiples(9))  # 30
