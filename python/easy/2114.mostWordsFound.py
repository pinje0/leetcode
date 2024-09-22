from typing import List


class Solution:
    def mostWordsFound(self, sentences: List[str]) -> int:
        temp = []
        for x in sentences:
            temp.append(len(x.split()))

        return max(temp)


if __name__ == "__main__":
    solution = Solution()
    print(
        solution.mostWordsFound(
            [
                "alice and bob love leetcode",
                "i think so too",
                "this is great thanks very much",
            ]
        )
    )  # 6
