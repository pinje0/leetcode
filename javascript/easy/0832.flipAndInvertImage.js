/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function (image) {
  let invertRow = image.map((row) => row.reverse());

  for (let i = 0; i < invertRow.length; i++) {
    for (let j = 0; j < invertRow[i].length; j++) {
      if (invertRow[i][j] == 0) {
        invertRow[i][j] = 1;
      } else {
        invertRow[i][j] = 0;
      }
    }
  }

  return invertRow;
};

console.log(
  flipAndInvertImage([
    [1, 1, 0],
    [1, 0, 1],
    [0, 0, 0],
  ])
); // [[1,0,0],[0,1,0],[1,1,1]]

// Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
// Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]

console.log(
  flipAndInvertImage([
    [1, 1, 0, 0],
    [1, 0, 0, 1],
    [0, 1, 1, 1],
    [1, 0, 1, 0],
  ]) // [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
);
