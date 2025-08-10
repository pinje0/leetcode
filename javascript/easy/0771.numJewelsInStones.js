//  @tracking
//! Re-Solved Times: 2

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

//* 1
///// var numJewelsInStones = function (jewels, stones) {
/////   let counter = 0;
/////   for (let i = 0; i < stones.length; i++) {
/////     if (jewels.includes(stones[i])) {
/////       counter++;
/////     }
/////   }
/////   return counter;
///// };

//* 2
var numJewelsInStones = function (jewels, stones) {
  let sum = 0;

  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) {
      sum++;
    }
  }
  return sum;
};

//TODO You're given strings `jewels` representing the types of stones that are jewels, and `stones` representing the stones you have.
//TODO Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.
//TODO Letters are case sensitive, so "a" is considered a different type of stone from "A".

console.log(numJewelsInStones('aA', 'aAAbbbb')); // 3
// console.log(numJewelsInStones('z', 'ZZ')); // 0
// Letters are case sensitive, so "a" is considered a different type of stone from "A".
