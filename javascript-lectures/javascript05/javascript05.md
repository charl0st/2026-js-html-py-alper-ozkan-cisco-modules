## SyntaxError

* Caused by poorly structured code.
* Examples include typos in keywords, unmatched parentheses, or brackets.
* JavaScript cannot execute the code and throws the error before starting the program.

**Example: Uncaught SyntaxError**

```javascript
iff (true) { // Typo in 'if' statement
  console.log("true");
}
```

**Explanation:**

* The typo "iff" is not a recognized keyword.
* JavaScript attempts to treat "iff" as a function call followed by an unexpected curly bracket.

## ReferenceError

* Occurs when referencing a non-existent function or variable.
* The JavaScript engine cannot find the meaning of the given name.
* This is a runtime error (thrown during execution).

**Examples: Uncaught ReferenceError**

```javascript
let a = b; // 'b' is not defined

fun();    // 'fun' is not defined
```

**Explanation:**

* In the first example, `b` is not declared before assignment.
* In the second example, the function `fun` is called without prior definition.

## TypeError

* Thrown when a value is not of the expected type for an operation.
* Examples include modifying constants or using methods on non-compatible types.
* This is a runtime error (thrown during execution).

**Examples: Uncaught TypeError**

```javascript
const someConstValue = 5;
someConstValue = 7; // Cannot modify constants

let someNumber = 10;
someNumber.length; // 'someNumber' is not a string
```

**Explanation:**

* In the first example, attempting to reassign a constant value results in an error.
* In the second example, trying to use the `length()` method on a number (not a string) throws a TypeError.

## RangeError

* Thrown when a value passed to a function is outside its valid range.
* This is a runtime error encountered during program execution.

**Example: Uncaught RangeError**

```javascript
let testArray1 = Array(10); // Valid array creation
console.log(testArray1.length); // Output: 10

let testArray2 = Array(-1); // Invalid array creation (negative length)
console.log(testArray2.length); // Throws RangeError
```

**Explanation:**

* The `Array` constructor expects a positive integer for the array size.
* Attempting to create `testArray2` with a negative length results in a RangeError.

## Less Common Errors

* **EvalError:** Occurs during evaluation using the `eval()` function.
* **InternalError:** Indicates an internal JavaScript engine issue (very rare).
* **URIError:** Thrown when encountering invalid characters in a URI function.

```javascript
// Example (not recommended):
let someString = "let x = 10;";
eval(someString); // Potential EvalError if 'someString' has invalid code
console.log(x); // Won't be executed if EvalError occurs
```

**Explanation:**

* The `eval()` function evaluates a string as JavaScript code.
* In this (not recommended) example, `someString` contains code to declare a variable `x`.
* If `someString` has invalid code (syntax errors, etc.), an EvalError is thrown.

[Example 1](javascript05/j05_example01.js)

## Handling Errors with try...catch

* **Purpose:** Allows handling exceptions that interrupt program execution.
* **Syntax:**

```javascript
try {
  // Code to try (might throw an error)
} catch (error) {
  // Code to handle the caught error
}
```

* **Explanation:**
    - The `try` block contains code that might throw an error.
    - If an error occurs, the `catch` block is executed with the error information stored in the `error` variable.
    - If no error occurs, the `catch` block is skipped.
    - After handling the error (or skipping the `catch` block), the program continues execution.

* **Common Error Variable Names:** `error`, `err`, or `e`.
* **Error Object:** Contains details about the caught error (type, message, etc.).

**Example:**

```javascript
try {
  let a = b; // ReferenceError: b is not defined
} catch (error) {
  console.log("Caught error:", error.message); // Logs error message
}
console.log("We handled the exception!"); // Reached after handling error
```

* **Note:** `try...catch` doesn't work on `SyntaxError` as the program can't execute with syntax errors.

## Conditional Error Handling

* Handle specific error types within the `catch` block.
* Use the `instanceof` operator to check error types.

```javascript
try {
  let a = b; // Might throw a ReferenceError
} catch (error) {
  if (error instanceof ReferenceError) {
    console.log("Reference error, reset a to -2");
    a = -2;
  } else {
    console.log("Other error:", error);
  }
}
```

**Explanation:**

* The `catch` block receives the thrown error in the `error` variable.
* `error instanceof ReferenceError` checks if the error is a `ReferenceError`.
* Conditional statements (like `if...else`) execute different code based on the error type.

**Note:** Variables declared with `let` inside `try` are not accessible in `catch` or `finally` due to block scope.

[Example 2](javascript05/j05_example02.js)

## The finally Statement

* The `finally` block executes after `try` and `catch` (if present).
* It's always executed regardless of errors.

```javascript
try {
  // Code to try
} finally {
  // Code to always execute
}
```

**Example: Successful Execution**

```javascript
let a = 10;
try {
  a = 5;
} finally {
  console.log(a); // Output: 5 (new value)
}
console.log(a); // Output: 5
```

**Explanation:**

* The `finally` block executes even without errors (successful code in `try`).
* The new value of `a` is displayed after the `finally` block.

**Example: Error Handling with finally**

```javascript
let a = 10;
try {
  a = b; // ReferenceError
} finally {
  console.log(a); // Output: 10 (original value)
}
console.log(a); // Output: 10
```

**Explanation:**

* A `ReferenceError` is thrown in the `try` block.
* The `finally` block executes even with errors.
* The original value of `a` is displayed after the `finally` block.

**Combining finally with catch:**

* Both `catch` and `finally` are optional, but at least one is required with `try`.
* The code can jump from `try` to `catch` and then to `finally` if an error occurs.

[Example 3](javascript05/j05_example03.js)

## Throwing Custom Errors

* Use the `throw` statement to generate custom exceptions.
* The thrown value can be any data type.

```javascript
console.log("start"); // Output: start
throw 100; // Throws the number 100 (treated as an error)
console.log("end"); // Not executed due to the thrown error

try {
  throw 100;
} catch (error) {
  console.log(error); // Output: 100 (caught error)
}
console.log("end"); // Output: end (program continues)
```

**Explanation:**

* The first example throws the number `100`, causing an uncaught error and stopping execution.
* The second example throws `100` inside a `try...catch` block, where it's caught and handled, allowing program continuation.

## Throwing Custom Errors in Practice

**Example: Factorial Function with Range Limit**

```javascript
function factorial(n) {
  let result = 1;
  for (; n > 1; n--) {
    result *= n;
  }
  return result;
}

console.log(factorial(3)); // Output: 6
console.log(factorial(20)); // Output: Large number

function factorial(n) {
  if (n > 20) {
    throw new RangeError("Max value 20");
  }
  let result = 1;
  for (; n > 1; n--) {
    result *= n;
  }
  return result;
}

console.log(factorial(20)); // Output: Large number
console.log(factorial(1000)); // Throws a RangeError
```

**Explanation:**

* The initial `factorial` function calculates factorials but allows very large numbers.
* The modified `factorial` function throws a `RangeError` if the input `n` is greater than 20.
* Throwing a `RangeError` object with a message allows for more informative error handling.

[Example 4](javascript05/j05_example04.js)

## Debugging JavaScript with Developer Tools

* Identify and fix errors in your JavaScript code.
* Built-in functionality within most web browsers.
* Accessed by pressing F12 (or similar shortcut) on most browsers.

**The Console**

* View error messages and logs from your JavaScript code.
* Interact with your code using JavaScript commands.
* Test code snippets and expressions.

**The Network**

* Inspect network requests made by the web page.
* Analyze the performance of these requests.
* Identify issues with loading resources (like images, scripts, or stylesheets).

**The Debugger**

* Set breakpoints to pause code execution at specific lines.
* Step through your code line by line.
* Inspect variable values at different points in your code.

## Using External Libraries in Node.js

* Extend functionalities beyond built-in modules.
* Example: User input with the `prompt` library.

**Installation:**

1. Open your terminal and navigate to your project directory.
2. Run the following command to install the `prompt` library:

```bash
npm install prompt
```

**Code Example:**

```javascript
// npm install prompt

const prompt = require('prompt');

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}

// Get user input for temperature and conversion type
prompt.start();

prompt.get(['temperature', 'type'], (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const temperature = parseFloat(result.temperature);
  const type = result.type.toUpperCase();
  
  // Validate conversion type
  if (type !== "C" && type !== "F") {
    console.error("Invalid conversion type. Please enter 'C' or 'F'.");
    return;
  }
  
  // Convert temperature based on type
  let convertedTemp;
  if (type === "C") {
    convertedTemp = celsiusToFahrenheit(temperature);
  } else {
    convertedTemp = fahrenheitToCelsius(temperature);
  }
  
  // Display the converted temperature
  console.log(`${temperature}${type} is equal to ${convertedTemp.toFixed(2)}${type === "C" ? "F" : "C"}`);
});
```

Uses Node.js
[Example 5](javascript05/j05_example05.js)

Uses a browser
[Example 6](j05_example06/j05_example06.html)

## How to install node.js
* Download: https://nodejs.org/en/download/prebuilt-binaries
* Unpack to folder: ```C:\Users\Student.ST11LAB319\node```
* Type here to search: ```Edit enviroment variables for your account```
* Select ```Path```, ```Edit```, ```New```
* Add ```C:\User\Student.ST11LAB319\node```
* Click ```OK```

# NPM
* Install https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
* Because it is necessary for install libs e.g. npm install prompt
