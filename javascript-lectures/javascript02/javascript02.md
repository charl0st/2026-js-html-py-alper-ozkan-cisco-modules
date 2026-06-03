##  JavaScript Operators

* Operators are special symbols used to perform operations on values.
* There are different types of operators:
  * Binary: Operate on two operands (e.g., +, -, *)
  * Unary: Operate on a single operand (e.g., -, !)
  * Ternary: Conditional operator (e.g., condition ? expr1 : expr2)
* Based on placement:
  * Prefix: Before operand (e.g., ++x)
  * Postfix: After operand (e.g., x++)
  * Infix: Between operands (e.g., x + y)
* Common categories:
  * Assignment: Assign values (e.g., =)
  * Arithmetic: Perform mathematical operations (e.g., +, -, *)
  * Logical: Perform comparisons (e.g., &&, ||)
  * Conditional: Make decisions (e.g., ?)

## Assignment Operators

* Used to assign values to variables.
* Example (const declaration):

```javascript
const name = "Alice";
console.log(name); // -> Alice
```

* Re-assignment:

```javascript
let year = 2050;
let newYear = year = 2051;
console.log(year); // -> 2051 (new value assigned)
```

## Arithmetic Operators

* Perform mathematical calculations on numbers.
* Binary operators:
  * Addition (+)
  * Subtraction (-)
  * Multiplication (*)
  * Division (/)
  * Remainder (%)
  * Exponentiation (**)
* Example:

```javascript
const x = 5;
const y = 2;

console.log("addition: ", x + y); // -> 7
console.log("subtraction: ", x - y); // -> 3
console.log("multiplication: ", x * y); // -> 10
console.log("division: ", x / y); // -> 2.5
console.log("division remainder :", x % y); // -> 1
console.log("exponent: ", x ** y); // -> 25
```

## Unary Arithmetic Operators

* The plus (+) and minus (-) operators used on a single operand.
* Can convert operands or negate values.
* Example:

```javascript
let str = "123";
let n1 = +str;
let n2 = -str;
let n3 = -n2;
let n4 = +"abcd";

console.log(`${str} : ${typeof str}`); // -> 123 : string
console.log(`${n1} : ${typeof n1}`); // -> 123 : number (converts string to number)
console.log(`${n2} : ${typeof n2}`); // -> -123 : number (negates)
console.log(`${n3} : ${typeof n3}`); // -> 123 : number (negates again)
console.log(`${n4} : ${typeof n4}`); // -> NaN : number (cannot convert "abcd")
```

## Unary Increment and Decrement Operators

* Increment (++) and decrement (--) operators modify a variable by 1.
* They come in prefix and postfix forms:
  * Prefix (e.g., ++n): Increment before using the value.
  * Postfix (e.g., n++): Use the current value, then increment.
* Example (postfix):

```javascript
let n1 = 5;

console.log(n1++);  // -> logs 5 (original value), then increments to 6
console.log(n1);    // -> 6 (new value)

console.log(++n1);  // -> increments to 7, then logs 7
console.log(n1);    // -> 7
```

* Floating-point precision: Small errors can occur in calculations.

```javascript
console.log(0.2 + 0.1); // -> 0.30000000000000004 (not exact due to representation)
console.log(0.2 * 0.1); // -> 0.020000000000000004 (not exact due to representation)
console.log(0.3 / 0.1); // -> 2.9999999999999996 (not exact due to representation)
```

[Example 1](j02_example01/j02_example01.html)

## Compound Assignment Operators

* Combine arithmetic operators with the assignment operator (`=`) for shorthand notation.
* Supported operators:
  * Addition (`+=`)
  * Subtraction (`-=`)
  * Multiplication (`*=`)
  * Division (`/=`)
  * Remainder (`%=`)
  * Exponentiation (`**=`)
* Example:

```javascript
let x = 10;

x += 2;  // Equivalent to x = x + 2
console.log(x); // -> 12
x -= 4;  // Equivalent to x = x - 4
console.log(x); // -> 8
```

## Logical Operators and Non-Boolean Values

* Logical operators (`&&`, `||`, `!`) work with Boolean values (true/false).
* Non-Boolean values are implicitly converted to Boolean before logical operations.
* Conversion rules:
  * `0`, `""`, `null`, `undefined`, `NaN` become `false`.
  * All other values become `true`.
* Examples:

```javascript
let nr = 0;
let year = 1970;
let name = "Alice";
let empty = "";

console.log(!nr); // -> true (0 is falsy)
console.log(!year); // -> false (year is truthy)
console.log(!name); // -> false (name is truthy)
console.log(!empty); // -> true (empty string is falsy)
```

## Compound Logical Assignment Operators

* Logical AND assignment (`&&=`) and logical OR assignment (`||=`) combine assignment and logical operations.
* They assign the result of a logical operation to a variable.
* Example (AND assignment):

```javascript
let a = true;
console.log(a); // -> true
a &&= false;  // Equivalent to a = a && false
console.log(a); // -> false (false assigned because a is false)
```

* Example (OR assignment):

```javascript
let b = false;
console.log(b); // -> false
b ||= true;   // Equivalent to b = b || true
console.log(b); // -> true (true assigned because b is false)
```

[Example 2](j02_example02/j02_example02.html)

## String Operators

* **Concatenation (+)**
  * Is used to combine strings.
  * Converts all operands to strings if any operand is a string type.
* Example:

```javascript
let name = "Alice";
let greeting = "Hello, " + name;
console.log(greeting); // -> "Hello, Alice"
```

* **Compound Assignment Operator (+=)**
  * Combines the addition operator (+) with the assignment operator (=).
  * Adds a value to a variable and assigns the result back to the variable.
* Example:

```javascript
let message = "Welcome";
message += " everyone!";
console.log(message); // -> "Welcome everyone!"
```

## Comparison Operators

* Used to compare values for equality or inequality.
* All comparison operators are binary (involve two operands).
* Return a boolean value (true/false) based on the comparison.

* **Operators:**
  - `===` (strict equality): Checks for both value and type equality.
  - `!==` (strict inequality): Opposite of strict equality.
  - `==` (loose equality): May perform type coercion (potentially unexpected).
  - `!=` (loose inequality): Opposite of loose equality.
  - `<` (less than)
  - `>` (greater than)
  - `<=` (less than or equal to)
  - `>=` (greater than or equal to)

* Examples:

```javascript
console.log(10 === 10); // -> true (strict equality)
console.log("10" == 10); // -> true (loose equality with type coercion)
console.log(10 > 5); // -> true (greater than)
console.log("apple" < "banana"); // -> true (lexicographic comparison)
```

## Other Operators

* **typeof**
  * Returns the data type of a value.

* Example:

```javascript
let age = 25;
console.log(typeof age); // -> "number"

let isStudent = true;
console.log(typeof isStudent); // -> "boolean"
```

* **instanceof**
  * Checks if an object is an instance of a specific constructor.

* Example:

```javascript
let numbers = [1, 2, 3];
console.log(numbers instanceof Array); // -> true

let number = 10;
console.log(number instanceof Array); // -> false
```

* **delete**
  * Removes a property from an object.

* Example:

```javascript
let person = {
  name: "John",
  age: 30
};
console.log(person.age); // -> 30
delete person.age;
console.log(person.age); // -> undefined
```

* **Ternary** (conditional)
  * A shorthand for if-else statements.

* Example:

```javascript
let isRaining = true;
let message = isRaining ? "Take an umbrella" : "Enjoy the sunshine";
console.log(message); // -> "Take an umbrella"
```

## Alert Dialog Box

* The `alert()` method displays a modal dialog with a message.
* The message can be a string or the result of an expression.
* Only one argument (message) is typically displayed.

* Examples:

```javascript
alert("This is an alert message.");  // Displays "This is an alert message."
alert(10 * 5);                       // Displays "50" (result of the expression)
alert(false);                         // Displays "false"
```

## Confirm Dialog Box

* The `confirm()` method displays a modal dialog with a message and two buttons: "OK" and "Cancel".
* The method returns `true` if the user clicks "OK", and `false` if the user clicks "Cancel".

* Example:

```javascript
let isConfirmed = window.confirm("Are you sure you want to proceed?");

if (isConfirmed) {
  console.log("Confirmed!");
} else {
  console.log("Cancelled.");
}
```

[Example 3](j02_example03/j02_example03.html)


## Prompt Dialog Box

* The `prompt()` method displays a modal dialog with a message and an input field.
* The message is displayed above the input field.
* An optional default value can be specified for the input field.
* The method returns the value entered by the user, or `null` if the user clicks "Cancel".

* Example:

```javascript
let userName = window.prompt("What is your name?");

if (userName) {
  console.log("Hello, " + userName);
} else {
  console.log("Hello, anonymous user.");
}
```

[Example 4](j02_example04/j02_example04.html)