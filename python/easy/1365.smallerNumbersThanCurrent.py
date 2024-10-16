from typing import List


class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        res_list = []

        for i in nums:
            counter = 0
            for j in nums:
                if i > j and i != j:
                    counter += 1
            res_list.append(counter)

        return res_list


if __name__ == "__main__":
    solution = Solution()
    print(solution.smallerNumbersThanCurrent([8, 1, 2, 2, 3]))  # [4,0,1,1,3]
    print(solution.smallerNumbersThanCurrent([6, 5, 4, 8]))  # [2,1,0,3]
    print(solution.smallerNumbersThanCurrent([7, 7, 7, 7]))  # [0,0,0,0]
