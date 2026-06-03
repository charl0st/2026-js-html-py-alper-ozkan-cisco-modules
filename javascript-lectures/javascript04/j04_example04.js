// Example 1 - Storing and Calling a Function
function showMessage(message) {
    console.log('Message:', message);
}

let sm = showMessage; // Store `showMessage` function in `sm` variable

sm("This works!"); // Execute `showMessage` using the variable

console.log(typeof sm); // Check `sm` type (should be "function")

// Important distinction between storing the function and its execution:

function doNothing() {
    return undefined;
}

let a = doNothing(); // Assigns the result (undefined) of the function call
let b = doNothing;   // Assigns the function itself (a reference)

console.log(typeof a); // -> undefined (result of the call)
console.log(typeof b); // -> function (the function itself)

// // Example 2 - Passing Functions as Arguments
// function add(a, b) {
//     return a + b;
// }
//
// function multiply(a, b) {
//     return a * b;
// }
//
// function operation(func, first, second) {
//     return func(first, second); // Call the function passed as an argument
// }
//
// console.log(operation(add, 10, 20)); // -> 30 (calls `add` with 10 and 20)
// console.log(operation(multiply, 10, 20)); // -> 200 (calls `multiply` with 10 and 20)

