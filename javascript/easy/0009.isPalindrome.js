//  @tracking
//! Re-Solved Times: 2

/**
 * @param {number} x
 * @return {boolean}
 */

//* 1
// var isPalindrome = function (x) {
//   let v1 = x.toString();
//   let v2 = '';

//   for (let i = v1.length - 1; i >= 0; i--) {
//     v2 += v1[i];
//   }

//   return v1 == v2 ? true : false;
// };

//*  2
var isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  let toStr = x.toString();
  let reversed = '';
  for (let i = toStr.length - 1; i >= 0; i--) {
    reversed += toStr[i];
  }

  return toStr == reversed ? true : false;
};

//? Output
console.log(isPalindrome(121)); // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10)); // false
