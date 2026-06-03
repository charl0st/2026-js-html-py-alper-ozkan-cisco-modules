// // SyntaxError
// iff (true) { // Typo in 'if' statement
//     console.log("true");
// }

// // ReferenceError
// let a = b; // 'b' is not defined
//
// fun();    // 'fun' is not defined

// // TypeError
// const someConstValue = 5;
// someConstValue = 7; // Cannot modify constants
//
// let someNumber = 10;
// someNumber.length; // 'someNumber' is not a string

// // RangeError
// let testArray1 = Array(10); // Valid array creation
// console.log(testArray1.length); // Output: 10
//
// let testArray2 = Array(-1); // Invalid array creation (negative length)
// console.log(testArray2.length); // Throws RangeError

// // Less Common Errors
// let someString = "let x = 10;"; // Example (not recommended):
// eval(someString); // Potential EvalError if 'someString' has invalid code