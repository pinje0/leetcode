/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const people = names.map((name, index) => ({
    name: name,
    height: heights[index],
  }));

  people.sort((a, b) => b.height - a.height);

  return people.map((person) => person.name);
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170])); // ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.

console.log(sortPeople(["Alice", "Bob", "Bob"], [155, 185, 150])); // ["Bob","Alice","Bob"]
// Explanation: The first Bob is the tallest, followed by Alice and the second Bob.
