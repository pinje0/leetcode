/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
    // Wrong
    // return Object.keys(obj) == 0 ? true : false

    for (let key in obj) {
        return false
    }
    return true
}

console.log(isEmpty({ "x": 5, "y": 42 })) // false
console.log(isEmpty({})) // true
console.log(isEmpty([{ "length": 0 }])) // false
