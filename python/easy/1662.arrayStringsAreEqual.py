from typing import List


class Solution:
    def arrayStringsAreEqual(self, word1: List[str], word2: List[str]) -> bool:
        return True if "".join(word1) == "".join(word2) else False


if __name__ == "__main__":
    solution = Solution()
    print(solution.arrayStringsAreEqual(["ab", "c"], ["a", "bc"]))
