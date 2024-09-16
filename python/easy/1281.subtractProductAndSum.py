class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        newList = []

        for x in str(n):
            newList.append(int(x))

        res_multiply = 1
        for y in newList:
            res_multiply = res_multiply * y

        res_sum = sum(newList)

        return res_multiply - res_sum


if __name__ == "__main__":
    solution = Solution()
    print(solution.subtractProductAndSum(234))  # 15

# Input: n = 234
# Output: 15
# Explanation:
# Product of digits = 2 * 3 * 4 = 24
# Sum of digits = 2 + 3 + 4 = 9
# Result = 24 - 9 = 15
