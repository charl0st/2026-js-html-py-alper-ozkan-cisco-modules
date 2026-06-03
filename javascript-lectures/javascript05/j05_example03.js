// The finally Statement
let a = 10;
try {
    a = 5;
} finally {
    console.log(a); // Output: 5 (new value)
}
console.log(a); // Output: 5

// // Error Handling with finally
// let a = 10;
// try {
//     a = b; // ReferenceError
// } finally {
//     console.log(a); // Output: 10 (original value)
// }
// console.log(a); // Output: 10
