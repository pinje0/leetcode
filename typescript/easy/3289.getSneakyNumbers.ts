function getSneakyNumbers(nums: number[]): number[] {
  return nums.filter((item, index) => nums.indexOf(item) !== index).sort((a, b) => a - b);
}

console.log(getSneakyNumbers([0, 1, 1, 0])); // [0, 1]
console.log(getSneakyNumbers([0, 3, 2, 1, 3, 2])); // [2, 3]
console.log(getSneakyNumbers([7, 1, 5, 4, 3, 4, 6, 0, 9, 5, 8, 2])); // [4, 5]
