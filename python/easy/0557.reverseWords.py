class Solution:
    def reverseWords(self, s: str) -> str:
        reverse_str = ""
        for x in reversed(s):
            reverse_str = reverse_str + x

        res = list(reversed(reverse_str.split()))

        return " ".join(res)


if __name__ == "__main__":
    solution = Solution()
    print(
        solution.reverseWords("Let's take LeetCode contest")
    )  # "s'teL ekat edoCteeL tsetnoc"
