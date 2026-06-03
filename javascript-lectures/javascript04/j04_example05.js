// Example 1 - Passing Anonymous Functions
function operation(func, first, second) {
    return func(first, second);
}

// Named function expression for reference
let myAdd = function(a, b) {
    return a + b;
}

// Passing the named function
console.log(operation(myAdd, 10, 20)); // -> 30

// Passing an anonymous function directly
console.log(operation(function(a, b) {
    return a * b;
}, 10, 20)); // -> 200


// // Example 2 - Synchronous Callback Execution
// let inner = function() {
//     console.log('inner 1');
// }
//
// let outer = function(callback) {
//     console.log('outer 1');
//     callback();
//     console.log('outer 2');
// }
//
// console.log('test 1');
// outer(inner);
// console.log('test 2');
//
// // Output:
// // test 1
// // outer 1
// // inner 1
// // outer 2
// // test 2

// // Example 3 - Asynchronous Callback with setTimeout
// let inner = function() {
//     console.log('inner 1');
// }
//
// let outer = function(callback) {
//     console.log('outer 1');
//     setTimeout(callback, 1000); // Delay callback by 1 second
//     console.log('outer 2');
// }
//
// console.log('test 1');
// outer(inner);
// console.log('test 2');
//
// // Output (test 2 appears before inner 1 due to the delay):
// // test 1
// // outer 1
// // outer 2
// // test 2
// // ... (1 second delay)
// // inner 1