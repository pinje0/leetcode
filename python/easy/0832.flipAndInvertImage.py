from typing import List


class Solution:
    def flipAndInvertImage(self, image: List[List[int]]) -> List[List[int]]:
        for img in image:
            img.reverse()

            for i in range(len(img)):
                img[i] = 1 - img[i]

        return image


if __name__ == "__main__":
    solution = Solution()
    print(
        solution.flipAndInvertImage(
            [
                [1, 1, 0],
                [1, 0, 1],
                [0, 0, 0],
            ]
        )
    )  # [[1,0,0],[0,1,0],[1,1,1]]

# Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
# Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
