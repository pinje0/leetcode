class Solution:
    def scoreOfString(self, s: str) -> int:
        score: int = 0

        for i in range(len(s) - 1):
            score += abs(ord(s[i]) - ord(s[i + 1]))

        return score


if __name__ == "__main__":
    solution = Solution()
    print(solution.scoreOfString("hello"))  # 13
