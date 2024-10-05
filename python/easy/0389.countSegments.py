class Solution:
    def countSegments(self, s: str) -> int:
        return len(s.split())


if __name__ == "__main__":
    solution = Solution()
    print(solution.countSegments("Hello, my name is John"))  # 5
    print(solution.countSegments(""))  # 0
    print(solution.countSegments("" ""))  # 0
    print(
        solution.countSegments(
            "Of all the gin joints in all the towns in all the world,   "
        )
    )  # 13
