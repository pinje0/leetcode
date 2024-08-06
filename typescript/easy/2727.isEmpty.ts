export type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue }
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
    for (let key in obj) {
        return false
    }
    return true
}

console.log(isEmpty({ "x": 5, "y": 42 })) // false
console.log(isEmpty({})) // true
console.log(isEmpty([{ "length": 0 }])) // false
