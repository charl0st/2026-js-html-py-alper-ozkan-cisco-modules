// Example 1 - setTimeout and setInterval Functions
let inner = function() {
    console.log('inner 1');
}

let outer = function(callback) {
    console.log('outer 1');
    let timerId = setInterval(callback, 1000); // Call `inner` every 1 second
    setTimeout(function() {
        clearInterval(timerId); // Clear interval after 5.5 seconds
    }, 5500);
    console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');

// Output (shows 5 calls of "inner 1" due to the cleared interval):
// outer 1
// outer 2
// test 2
// ... (1 second delay)
// inner 1
// inner 1
// inner 1
// inner 1
// inner 1


// // Example 2 - Function expression
// let add = function(a, b) {
//     return a + b;
// }
//
// console.log(add(10, 20)); // Output: 30

// Example 3 - Arrow Functions
// let add = (a, b) => a + b;
//
// console.log(add(15, 25)); // Output: 40