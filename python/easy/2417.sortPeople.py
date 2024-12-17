from typing import List


class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        people = [{"name": name, "height": heights[i]} for i, name in enumerate(names)]

        people.sort(key=lambda person: person["height"], reverse=True)

        return [person["name"] for person in people]


if __name__ == "__main__":
    solution = Solution()
    print(
        solution.sortPeople(["Mary", "John", "Emma"], [180, 165, 170])
    )  # ["Mary","Emma","John"]
    print(
        solution.sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])
    )  # ["Bob","Alice","Bob"]
