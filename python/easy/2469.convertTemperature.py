from typing import List

class Solution:
    def convertTemperature(self, celsius: float) -> List[float]:
      kelvin:float = celsius + 273.15
      fahrenheit:float = celsius * 1.80 + 32.00

      return [kelvin,fahrenheit]
        
        
if __name__ == "__main__":
    solution = Solution()
    print(solution.convertTemperature(36.50)) # [309.65000,97.70000]
    print(solution.convertTemperature(122.11)) # [395.26000,251.79800]
