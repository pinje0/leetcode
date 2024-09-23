class Solution:
    def countDigits(self, num: int) -> int:
        counter: int = 0

        for digit in str(num):
            if num % int(digit) == 0:
                counter += 1

        return counter


if __name__ == "__main__":
    solution = Solution()
    # print(solution.countDigits(7))  # 1
    print(solution.countDigits(121))  # 2
