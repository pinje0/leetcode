from typing import List

class Solution:
    def finalValueAfterOperations(self, operations: List[str]) -> int:
      counter:int = 0

      for x in operations:
        if(x == "--X" or x == "X--"):
          counter -= 1
        else:
          counter += 1
          
      return counter

if __name__ == "__main__":
  solution = Solution()
  print(solution.finalValueAfterOperations(["--X","X++","X++"])) # 1
  print(solution.finalValueAfterOperations(["++X","++X","X++"])) # 3

# Explanation: The operations are performed as follows:
# Initially, X = 0.
# --X: X is decremented by 1, X =  0 - 1 = -1.
# X++: X is incremented by 1, X = -1 + 1 =  0.
# X++: X is incremented by 1, X =  0 + 1 =  1.