//  @tracking
//! Re-Solved Times: 2

/**
 * @param {string} address
 * @return {string}
 */

//* 1
// var defangIPaddr = function (address) {
//     return address.replaceAll(".", "[.]")
// }

//* 2
var defangIPaddr = function (address) {
  let res = '';
  for (let i = 0; i < address.length; i++) {
    console.log(address[i]);
    if (address[i] === '.') {
      res += '[.]';
    } else {
      res += address[i];
    }
  }
  return res;
};

console.log(defangIPaddr('1.1.1.1')); // "1[.]1[.]1[.]1"
// console.log(defangIPaddr('255.100.50.0')); // "255[.]100[.]50[.]0"
