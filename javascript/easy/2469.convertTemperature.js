/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function (celsius) {
    let kelvin = celsius + 273.15
    let fahrenheit = celsius * 1.8 + 32.0

    return [kelvin, fahrenheit]
}

console.log(convertTemperature(36.5)) // [309.65000, 97.70000]
// Explanation: Temperature at 36.50 Celsius :
// converted in Kelvin is 309.65
// converted in Fahrenheit is 97.70.
