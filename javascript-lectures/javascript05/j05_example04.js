// Throwing Custom Errors
console.log("start"); // Output: start
throw 100; // Throws the number 100 (treated as an error)
console.log("end"); // Not executed due to the thrown error

// try {
//     throw 100;
// } catch (error) {
//     console.log(error); // Output: 100 (caught error)
// }
// console.log("end"); // Output: end (program continues)
//
// // Throwing Custom Errors in Practice
// function factorial(n) {
//     let result = 1;
//     for (; n > 1; n--) {
//         result *= n;
//     }
//     return result;
// }
//
// console.log(factorial(3)); // Output: 6
// console.log(factorial(20)); // Output: Large number
//
// function factorial(n) {
//     if (n > 20) {
//         throw new RangeError("Max value 20");
//     }
//     let result = 1;
//     for (; n > 1; n--) {
//         result *= n;
//     }
//     return result;
// }
//
// console.log(factorial(20)); // Output: Large number
// console.log(factorial(1000)); // Throws a RangeError