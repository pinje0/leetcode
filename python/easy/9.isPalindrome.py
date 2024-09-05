class Solution:
    def isPalindrome(self, x: int) -> bool:
      left = str(x)
      right = ""
      
      for num in range(len(left) -1, -1, -1):
        right += left[num]
      
      return True if left == right else False

if __name__ == "__main__":
    solution = Solution()
    print(solution.isPalindrome(121)) #true 
    print(solution.isPalindrome(-121)) #false
    print(solution.isPalindrome(10)) #false