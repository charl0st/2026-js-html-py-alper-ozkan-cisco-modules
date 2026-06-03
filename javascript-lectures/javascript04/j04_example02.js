// Example 1 - Variable Shadowing in Functions
function add(first, second) {
    return first + second;
}

let first = 10, second = 20, third = 40, fourth = 80;
console.log(add(first, second)); // -> 30 (first and second as parameters)
console.log(add(second, third)); // -> 60 (second as parameter, third as global)
console.log(add(third, fourth)); // -> 120 (third and fourth as globals)

// Example 2 - Variable Shadowing in Functions - Additional Example
let a = 100, b = 200, c = 300;

function test(a) {
    let b = 10;
    console.log(a); // -> parameter a (1)
    console.log(b); // -> local variable b (10)
    console.log(c); // -> global variable c (300)
}

test(1);     // -> 1
                // -> 10
                // -> 300

console.log(a); // -> 100 (original global value)
console.log(b); // -> 200 (original global value)
console.log(c); // -> 300 (original global value)

// // Example 3 - Parameter Validation
// function getMeanTemp(temperatures) {
//     if (!(temperatures instanceof Array)) { // Check if argument is an array
//         return NaN; // Return NaN (Not a Number) if invalid
//     }
//
//     let sum = 0;
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i];
//     }
//     return sum / temperatures.length;
// }
//
// console.log(getMeanTemp(10)); // -> NaN (invalid input)
// console.log(getMeanTemp([10, 30])); // -> 20 (valid input)