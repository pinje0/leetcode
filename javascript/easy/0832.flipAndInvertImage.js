//  @tracking
//! Re-Solved Times: 2

/**
 * @param {number[][]} image
 * @return {number[][]}
 */

//* 1
//// var flipAndInvertImage = function (image) {
////   let invertRow = image.map((row) => row.reverse());

////   for (let i = 0; i < invertRow.length; i++) {
////     for (let j = 0; j < invertRow[i].length; j++) {
////       if (invertRow[i][j] == 0) {
////         invertRow[i][j] = 1;
////       } else {
////         invertRow[i][j] = 0;
////       }
////     }
////   }

////   return invertRow;
//// };

//* 2
var flipAndInvertImage = function (image) {
  for (let i = 0; i < image.length; i++) {
    image[i].reverse();
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j]) {
        image[i][j] = 0;
      } else {
        image[i][j] = 1;
      }
    }
  }
  return image;
};

//TODO Given an `n x n` binary matrix `image`, flip the image horizontally, then invert it, and return the resulting image.
//TODO To flip an image horizontally means that each row of the image is reversed.
//TODO
//TODO - For example, flipping [1,1,0] horizontally results in [0,1,1].
//TODO To invert an image means that each `0` is replaced by `1`, and each `1` is replaced by `0`.
//TODO - For example, inverting `[0,1,1]` results in `[1,0,0]`.

// prettier-ignore
console.log(flipAndInvertImage([[1, 1, 0],[1, 0, 1],[0, 0, 0],])); // [[1,0,0],[0,1,0],[1,1,1]]
// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

// prettier-ignore
console.log(flipAndInvertImage([ [1, 1, 0, 0], [1, 0, 0, 1], [0, 1, 1, 1], [1, 0, 1, 0],])); // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
