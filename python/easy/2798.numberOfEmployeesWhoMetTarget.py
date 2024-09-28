from typing import List


class Solution:
    def numberOfEmployeesWhoMetTarget(self, hours: List[int], target: int) -> int:
        counter: int = 0

        for e in hours:
            if e >= target:
                counter += 1

        return counter


if __name__ == "__main__":
    solution = Solution()
    print(solution.numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2))  # 3
# Explanation: The company wants each employee to work for at least 2 hours.
# - Employee 0 worked for 0 hours and didn't meet the target.
# - Employee 1 worked for 1 hours and didn't meet the target.
# - Employee 2 worked for 2 hours and met the target.
# - Employee 3 worked for 3 hours and met the target.
# - Employee 4 worked for 4 hours and met the target.
# There are 3 employees who met the target.
