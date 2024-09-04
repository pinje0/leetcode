from typing import List

class Solution:
    def getConcatenation(self, nums: List[int]) -> List[int]:
      return nums + nums
      

solution = Solution()

solution.getConcatenation([1,2,1]) # [1,2,1,1,2,1]
# Explanation: The array ans is formed as follows:
# - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
# - ans = [1,2,1,1,2,1]

solution.getConcatenation([1,3,2,1]) # [1,3,2,1,1,3,2,1]