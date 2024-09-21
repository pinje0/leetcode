class Solution:
    def interpret(self, command: str) -> str:
        r = command.replace("()", "o")
        res: str = ""

        for x in r:
            if x == "(" or x == ")":
                x = ""
            else:
                res += x

        return res


if __name__ == "__main__":
    solution = Solution()
    print(solution.interpret("G()(al)"))  # "Goal"
    print(solution.interpret("G()()()()(al)"))  # "Gooooal"
