class Solution:
    def numJewelsInStones(self, jewels: str, stones: str) -> int:
        counter: int = 0

        for x in stones:
            if x in jewels:
                counter += 1

        return counter


if __name__ == "__main__":
    solution = Solution()
    print(solution.numJewelsInStones("aA", "aAAbbbb"))  # 3
    print(solution.numJewelsInStones("z", "ZZ"))  # 0
