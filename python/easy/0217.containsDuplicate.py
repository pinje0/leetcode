from typing import List


class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        num_counter = {}
        for number in nums:
            if number in num_counter:
                num_counter[number] += 1
                return True
            else:
                num_counter[number] = 1

        return False


if __name__ == "__main__":
    solution = Solution()
    print(solution.containsDuplicate([1, 2, 3, 1]))  # true
    print(solution.containsDuplicate([1, 2, 3, 4]))  # false
