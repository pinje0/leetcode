from typing import List

class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
      oneDigit = 0
      twoDigit = 0

      for digit in nums:
        if digit < 10:
          oneDigit += digit
        else:
          twoDigit += digit 
      
      return True if oneDigit != twoDigit else False
        
if __name__ == "__main__":
  solution = Solution()
  print(solution.canAliceWin([1,2,3,4,10])) # false
  print(solution.canAliceWin([1,2,3,4,5,14])) # true