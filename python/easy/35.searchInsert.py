from typing import List

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        if target in nums:
          return nums.index(target)
        else:
          nums.append(target)
          listSorted:List[int] = sorted(nums)
          return listSorted.index(target)


if __name__ == "__main__":
    solution = Solution()
    print(solution.searchInsert([1,3,5,6], 5)) #2 
    print(solution.searchInsert([1,3,5,6], 2)) #1
    print(solution.searchInsert([1,3,5,6], 7)) #4
    
# Given a sorted array of distinct integers and a target value,  
# return the index if the target is found. If not, return the 
# index where it would be if it were inserted in order.

