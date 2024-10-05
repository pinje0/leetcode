from typing import List


class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        newList: List[str] = []

        for x in range(1, n + 1):
            if x % 3 == 0 and x % 5 == 0:
                newList.append("FizzBuzz")
            elif x % 3 == 0:
                newList.append("Fizz")
            elif x % 5 == 0:
                newList.append("Buzz")
            else:
                newList.append(str(x))

        return newList


if __name__ == "__main__":
    solution = Solution()
    print(solution.fizzBuzz(3))  # ["1","2","Fizz"]
