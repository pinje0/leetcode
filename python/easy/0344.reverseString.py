from typing import List


class Solution:
    def reverseString(self, s: List[str]) -> None:
        """
        Do not return anything, modify s in-place instead.
        """

        s.reverse()


if __name__ == "__main__":
    solution = Solution()
    print(solution.reverseString(["h", "e", "l", "l", "o"]))  # ["o","l","l","e","h"]
