function flipAndInvertImage(image: number[][]): number[][] {
  let invertedRow: number[][] = image.map((row) => row.reverse());

  for (let i = 0; i < invertedRow.length; i++) {
    for (let j = 0; j < invertedRow[i].length; j++) {
      if (invertedRow[i][j] == 0) {
        invertedRow[i][j] = 1;
      } else {
        invertedRow[i][j] = 0;
      }
    }
  }

  return invertedRow;
}

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
