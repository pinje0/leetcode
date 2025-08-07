//  @tracking
//! Re-Solved Times: 2

/**
 * @param {string} s
 * @return {string}
 */

//* 1
////var reverseWords = function (s) {
////    let str = ""
////
////    for (let i = s.length - 1; i >= 0; i--) {
////        str += s[i]
////    }
////
////    return str.split(" ").reverse().join(" ")
////}

var reverseWords = function (s) {
  const split = s.split('');
  let reverse = '';
  for (let i = split.length - 1; i >= 0; i--) {
    reverse += split[i];
  }
  return reverse.split(' ').reverse().join(' ');
};

console.log(reverseWords("Let's take LeetCode contest"));
//TODO Example 1:
//TODO Input: s = "Let's take LeetCode contest"
//TODO Output: "s'teL ekat edoCteeL tsetnoc"

// console.log(reverseWords('Mr Ding'));
//TODO Example 2:
//TODO Input: s = "Mr Ding"
//TODO Output: "rM gniD"
