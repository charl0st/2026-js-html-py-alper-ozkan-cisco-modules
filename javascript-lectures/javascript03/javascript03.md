## The if statement

* Executes a block of code if a condition is true.

* Example 1: Checking user readiness

```javascript
let isUserReady = confirm("Are you ready?");

if (isUserReady) {
  alert("User ready!");
} else {
  console.log("User not ready!"); // Alternative action for false condition
}
```

* Example 2: Conditional discount based on cart value or points

```javascript
let userAge = 23;
let cartValue = 299;
let points = 703;
let shippingCost = 9.99;

if (userAge > 21 && (cartValue >= 300 || points >= 500)) {
  shippingCost = 0; // Free shipping for specific conditions
}

console.log(shippingCost);
```

## Conditional (Ternary) Operator

* A shorthand for if-else statements.

* Example 1: Free shipping based on price

```javascript
let price = 100;
let shippingCost = price > 50 ? 0 : 5;
console.log(`price = ${price}, shipping = ${shippingCost}`);
```

* Example 2: Assigning message based on confirmation

```javascript
let start = confirm("Start?");
let message = start ? "Here we go!" : "Aborted"; // Concise assignment
alert(message);
```

## The switch ... case statement

* Executes a block of code based on the value of an expression.

* Example: Choosing a gate in a game

```javascript
let gate = prompt("Choose gate: a, b, or c");
let win = false;

switch (gate) {
  case "a":
    alert("Gate A: empty");
    break;
  case "b":
    alert("Gate B: main prize");
    win = true;
    break;
  case "c":
    alert("Gate C: empty");
    break;
  default:
    alert("No gate " + String(gate)); // Handle invalid input
}

if (win) {
  alert("Winner!");
}
```

## The while loop

* Executes a block of code repeatedly as long as a condition is true.

* Example: Printing numbers from 0 to 90 in steps of 10

```javascript
let n = 0;
while (n < 91) {
  console.log(n);
  n += 10;
}
```

* Infinite loop (caution advised): This example demonstrates an infinite loop as the condition is always true.

```javascript
let isOver = false;
let counter = 1;

while (isOver !== true) {
  let continueLoop = confirm(`[${counter}] Continue the loop?`);
  isOver = continueLoop === true ? false : true; // Update condition based on confirmation
  counter++;
}
```

## The do...while loop

* Executes a block of code at least once, then continues as long as a condition is true.

* Example: Similar to the infinite loop example (Slide 4) but ensures at least one iteration

```javascript
let isOver;
let counter = 1;

do {
  isOver = !confirm(`[${counter++}] Continue the loop?`); // Update counter before check
} while (!isOver);
```

## The for loop

* Executes a block of code repeatedly with a predetermined initialization, condition, and increment/decrement.

* Example 1: Printing numbers from 0 to 9

```javascript
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

* Example 2: Looping through elements in an array

```javascript
let values = [10, 30, 50, 100];

for (let i = 0; i < values.length; i++) {
  console.log(values[i]); // Access and print each element's value
}
```

## for ... of loop

* Iterates over the values of iterable objects (arrays, strings, etc.).

* Example 1: Calculating the sum of elements in an array

```javascript
let values = [10, 30, 50, 100];
let sum = 0;
for (let number of values) {
  sum += number;
}
console.log(sum); // 190 (sum of all values)
```

* Example 2: Looping through object properties (not recommended for modern use)

```javascript
let user = {
  name: "Calvin",
  surname: "Hart",
  age: 66,
  email: "CalvinMHart@teleworm.us"
};

for (let key in user) {
  console.log(key); // Loops through property names (not values)
}
```

## The break and continue statements

* Control the flow within loops.

* **break:** Exits the loop completely.

* Example: Stopping a loop after a certain condition

```javascript
let i = 0;
while (true) { // Infinite loop without break
  console.log(i);
  i++;
  if (i >= 5) {
    break; // Exit the loop when i reaches 5
  }
}

alert('Exited the loop with a break (' + i + ').'); // Alert the final value of i
```

* **continue:** Skips the current iteration and continues to the next.

* Example: Skipping a specific iteration

```javascript
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // Skip iteration when i is 3
  }
  console.log(i);
}
```

## The break statement in switch

* Exits the switch statement after a matching case is executed.

* Example: Printing messages for chosen gates in a game

```javascript
let gate = prompt("Choose gate: a, b, or c");

switch (gate) {
  case "a":
    console.log("Gate A");
    break; // Exit switch after case "a"
  case "b":
    console.log("Gate B");
    break;
  case "c":
    console.log("Gate C");
    break;
  default:
    alert("No gate " + String(gate));
}
```

## Examples

To-Do List:

[Example 1](j03_example01/j03_example01.html)

Movable Square (javascript code nested in the page):

[Example 2](j03_example01/j03_example02.html)

Tic-Tac-Toe game (javascript file at the end of the page):

[Example 3](j03_example01/j03_example03.html)

