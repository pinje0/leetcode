function convertTemperature(celsius: number): number[] {
    let k: number = celsius + 273.15
    let f: number = celsius * 1.8 + 32.0

    return [k, f]
}

console.log(convertTemperature(36.5)) // [309.65000, 97.70000]
// Explanation: Temperature at 36.50 Celsius :
// converted in Kelvin is 309.65
// converted in Fahrenheit is 97.70.
