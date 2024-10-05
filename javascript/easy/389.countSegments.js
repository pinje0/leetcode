/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.trim() === "" ? 0 : s.split(/\s+/).filter((seg) => seg).length;
};

console.log(countSegments("Hello, my name is John")); // 5
console.log(countSegments("Hello")); // 1
console.log(countSegments("")); // 0
console.log(countSegments("                ")); // 0
console.log(countSegments("Of all the gin joints in all the towns in all the world,   ")); // 13
