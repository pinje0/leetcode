import re
from typing import List


class Solution:
    def mostCommonWord(self, paragraph: str, banned: List[str]) -> str:
        word_count = {}
        split_word = re.findall(r"\w+", paragraph.lower())

        for word in split_word:
            if word not in banned:
                count = word_count.get(word, 0)
                word_count[word] = count + 1

        most_common = ""
        max_count = 0

        for word, count in word_count.items():
            if count > max_count:
                most_common = word
                max_count = count

        return most_common


if __name__ == "__main__":
    solution = Solution()
    print(
        solution.mostCommonWord(
            "Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]
        )
    )  # ball
