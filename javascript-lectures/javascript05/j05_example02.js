// Handling Errors with try...catch
try {
    let a = b; // ReferenceError: b is not defined
} catch (error) {
    console.log("Caught error:", error.message); // Logs error message
}
console.log("We handled the exception!"); // Reached after handling error

// // Conditional Error Handling
// try {
//     let a = b; // Might throw a ReferenceError
// } catch (error) {
//     if (error instanceof ReferenceError) {
//         console.log("Reference error, reset a to -2");
//         a = -2;
//     } else {
//         console.log("Other error:", error);
//     }
// }