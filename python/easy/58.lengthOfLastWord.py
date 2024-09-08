class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        splitStr = s.split()
        return len(splitStr[len(splitStr) - 1])


if __name__ == "__main__":
    solution = Solution()
    print(solution.lengthOfLastWord("Hello World"))  # 5
