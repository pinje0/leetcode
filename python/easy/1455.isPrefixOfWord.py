class Solution:
    def isPrefixOfWord(self, sentence: str, searchWord: str) -> int:
        split_word = sentence.split(" ")

        for i, word in enumerate(split_word):
            if word.startswith(searchWord):
                return i + 1

        return -1


if __name__ == "__main__":
    solution = Solution()
    print(solution.isPrefixOfWord("i love eating burger", "burg"))  # 4
    print(solution.isPrefixOfWord("i am tired", "you"))  # -1
