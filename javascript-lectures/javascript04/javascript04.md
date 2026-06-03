## Declaring Functions in JavaScript

* Functions are reusable blocks of code that perform specific tasks.
* A function declaration uses the `function` keyword followed by the function name and parentheses.
* Function names follow the same rules as variable names and should be descriptive.
* Parentheses can optionally hold parameters (inputs) for the function.

```javascript
let temperatures;
let sum;
let meanTemp;

function getMeanTemp() {
    sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    meanTemp = sum / temperatures.length;
}
```

## Calling Functions

* To execute a function, use its name followed by parentheses.
* Values can be passed within the parentheses as arguments (if the function takes parameters).

```javascript
temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log("mean:", meanTemp);
```

**Local vs. Global Variables:**

* Variables declared inside a function (with `let`) are only accessible within that function's block.


## The `return` Statement in Functions

* The `return` statement exits a function and optionally provides a value.
* This value can be used when calling the function.

```javascript
let temperatures;

function getMeanTemp() {
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length; // Return the calculated mean temperature
}

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log("mean:", getMeanTemp());
```

## Parameters in Functions

* **Optional but Powerful:** Functions can optionally have parameters to receive input when called.
* **Declaration:** Parameters are listed within parentheses after the function name, separated by commas.
* **Local Scope:** Inside a function, parameters behave like local variables, accessible only within that function.

**Example: Adding Numbers**

```javascript
function add(first, second) {
  return first + second;
}

let result = add(5, 7);
console.log(result); // -> 12
```

* `add(first, second)`: The function takes two parameters, `first` and `second`.
* Inside the function, these parameters act as local variables to hold the values passed as arguments.

**Example: Mean Temperature with Parameter**

```javascript
function getMeanTemp(temperatures) {
  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  return sum / temperatures.length;
}

let day1 = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
console.log("mean:", getMeanTemp(day1)); // -> mean: 16.666666666666668
```

* `getMeanTemp(temperatures)`: The function takes one parameter, `temperatures`, which is an array containing the temperature data.

[Example 1](javascript04/j04_example01.js)

## Variable Shadowing in Functions

* Parameters within a function can create shadows, hiding variables with the same name from outer scopes (like global variables).

**Example: Shadowing with `add` Function**

```javascript
function add(first, second) {
  return first + second;
}

let first = 10, second = 20, third = 40, fourth = 80;
console.log(add(first, second)); // -> 30 (first and second as parameters)
console.log(add(second, third)); // -> 60 (second as parameter, third as global)
console.log(add(third, fourth)); // -> 120 (third and fourth as globals)
```

* Inside `add`:
    * `first` and `second` refer to the parameter values passed during the function call.
    * `third` and `fourth` refer to the global variables since there are no shadows for them within the function.
* Outside the function:
    * Each variable name refers to its corresponding global variable.
* Shadowing can be intentional or accidental. Be mindful of variable names within functions.
* When unsure, explicitly use `let` or `const` to declare local variables within a function to avoid shadowing issues.

**Additional Example:**

```javascript
let a = 100, b = 200, c = 300;

function test(a) {
  let b = 10;
  console.log(a); // -> parameter a (1)
  console.log(b); // -> local variable b (10)
  console.log(c); // -> global variable c (300)
}

test(1);        // -> 1
                // -> 10
                // -> 300

console.log(a); // -> 100 (original global value)
console.log(b); // -> 200 (original global value)
console.log(c); // -> 300 (original global value)
```

* Demonstrates shadowing with both parameters and local variables.
* Inside `test`:
    * `a` refers to the parameter value (1).
    * `b` shadows the global `b` with its local value (10).
    * `c` accesses the global variable `c` (300).
* Outside the function:
    * Global variables `a`, `b`, and `c` retain their original values.

## Parameter Validation

* Function parameters can be validated to ensure they meet expected data types.
* This helps prevent errors during function execution.

**Example: Validating Input for `getMeanTemp`**

```javascript
function getMeanTemp(temperatures) {
  if (!(temperatures instanceof Array)) { // Check if argument is an array
    return NaN; // Return NaN (Not a Number) if invalid
  }

  let sum = 0;
  for (let i = 0; i < temperatures.length; i++) {
    sum += temperatures[i];
  }
  return sum / temperatures.length;
}

console.log(getMeanTemp(10)); // -> NaN (invalid input)
console.log(getMeanTemp([10, 30])); // -> 20 (valid input)
```

* The `getMeanTemp` function now checks if the `temperatures` argument is an array using `instanceof`.
* If not an array, `NaN` is returned to indicate an error.

[Example 2](javascript04/j04_example02.js)

## Recursion in Functions

* Recursion is a function calling itself within its own definition, but with a different argument.
* It can be a concise way to solve problems that involve repetitive calculations.

**Example: Factorial Function (Iterative vs. Recursive)**

**Iterative Approach:**

```javascript
function factorial(n) {
  let result = 1;
  while (n > 1) {
    result *= n;
    n--;
  }
  return result;
}

console.log(factorial(6)); // -> 720
```

* This approach uses a loop to multiply `n` by the previous result until `n` reaches 1.

**Recursive Approach:**

```javascript
function factorial(n) {
  return n > 1 ? n * factorial(n - 1) : 1;
}

console.log(factorial(6)); // -> 720
```

* This approach uses a ternary operator to define the factorial:
    * If `n` is greater than 1, return `n` multiplied by the factorial of `n - 1`.
    * Otherwise, return 1 (base case).
* This leverages recursion to simplify the logic.

**Caution with Recursion:**

* Use recursion carefully, considering the number of embedded calls and potential for errors.
* Ensure a clear condition to terminate the recursion to avoid infinite loops.
  
[Example 3](javascript04/j04_example03.js)

## Functions as First-Class members

* Functions can be treated like any other data type (variables, strings, numbers).
* This allows storing functions in variables and passing them as arguments.

**Example: Storing and Calling a Function**

```javascript
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
```

**Passing Functions as Arguments**

* This flexibility allows powerful techniques like higher-order functions (functions that operate on other functions).

```javascript
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function operation(func, first, second) {
  return func(first, second); // Call the function passed as an argument
}

console.log(operation(add, 10, 20)); // -> 30 (calls `add` with 10 and 20)
console.log(operation(multiply, 10, 20)); // -> 200 (calls `multiply` with 10 and 20)
```

[Example 4](javascript04/j04_example04.js)

## Anonymous Functions

* Anonymous functions lack a formal name and are defined directly within function calls or assignments.
* They offer flexibility when functions are needed for a single use or within another function.
* Anonymous functions simplify code when a function is needed only once or within another function's context.

**Example: Passing Anonymous Functions**

```javascript
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
```

## Callback Functions

* Callback functions are functions passed as arguments to other functions.
* They are invoked (called back) at a specific point within the execution of the outer function.

**Synchronous Callbacks**

* Synchronous execution follows the order of code placement.
* The callback function executes when called within the outer function.
* Synchronous callbacks maintain the order of execution in the code.

**Example: Synchronous Callback Execution**

```javascript
let inner = function() {
  console.log('inner 1');
}

let outer = function(callback) {
  console.log('outer 1');
  callback();
  console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');

// Output:
// test 1
// outer 1
// inner 1
// outer 2
// test 2
```

## Asynchronous Callbacks

* Asynchronous execution involves handling events that may occur at variable times.
* Callback functions are used to respond to these events when they occur.

**Asynchronous Operations in JavaScript**

* Asynchronous behavior is common in browser-based JavaScript due to event-driven programming.
* Events can be triggered by timers, user actions, or data received from servers.
* Asynchronous callbacks introduce delays or wait for events, affecting the order of execution.

**Example: Asynchronous Callback with setTimeout**

```javascript
let inner = function() {
  console.log('inner 1');
}

let outer = function(callback) {
  console.log('outer 1');
  setTimeout(callback, 1000); // Delay callback by 1 second
  console.log('outer 2');
}

console.log('test 1');
outer(inner);
console.log('test 2');

// Output (test 2 appears before inner 1 due to the delay):
// test 1
// outer 1
// outer 2
// test 2
// ... (1 second delay)
// inner 1
```

[Example 5](javascript04/j04_example05.js)

## setTimeout and setInterval Functions

* **setTimeout:** Executes a function after a specified delay (in milliseconds).
* **setInterval:** Executes a function repeatedly, at fixed intervals.
* setTimeout and setInterval allow for timed and repeated function execution in asynchronous JavaScript.

**Example: Using setTimeout and setInterval**

```javascript
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
```

## Arrow Functions

* Arrow functions provide a concise syntax for defining functions.

**Basic Structure:**

```javascript
(parameters) => { function body }
```

**Simpler Syntax for Common Use Cases:**

* Omit parentheses for a single parameter.
* Omit `return` keyword for a single-statement function (implicit return).
* Arrow functions are a shorter alternative to function expressions for simple functions.

**Example: Arrow Function vs. Function Expression**

```javascript
// Function expression with console.log
let add = function(a, b) {
  return a + b;
}

console.log(add(10, 20)); // Output: 30

// Arrow function with console.log (single statement, implicit return)
let add = (a, b) => a + b;

console.log(add(15, 25)); // Output: 40
```

This code demonstrates both function expression and arrow function approaches:

1. **Function Expression:**
  - Defines a function `add` that takes two arguments `a` and `b`.
  - Inside the function:
    - Prints "The sum is:" followed by the sum of `a` and `b` to the console using `console.log`.
    - Returns the sum using `return`.

2. **Arrow Function:**
  - Defines an arrow function `add` that takes two arguments `a` and `b`.
  - Uses a single statement:
    - Prints "The sum is:" followed by the sum of `a` and `b` to the console with `console.log`.
  - Since it's a single statement, the `return` keyword is implicit (not necessary).

Both functions achieve the same result of logging the sum to the console and returning the value.
The arrow function offers a more concise syntax for this specific case.

[Example 6](javascript04/j04_example06.js)


Tic-Tac-Toe game using callback function:

[Example 7](j04_example07/j04_example07.js)