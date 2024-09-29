from typing import List


class Solution:
    def findWordsContaining(self, words: List[str], x: str) -> List[int]:
        newArr = []
        for i in range(len(words)):
            if x in words[i]:
                newArr.append(i)

        return newArr


if __name__ == "__main__":
    solution = Solution()
    print(solution.findWordsContaining(["leet", "code"], "e"))  # [0, 1]

# Input: words = ["leet","code"], x = "e"
# Output: [0,1]
# Explanation: "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.
