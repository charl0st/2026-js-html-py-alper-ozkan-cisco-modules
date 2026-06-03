let isTrue = true; // Boolean
console.log("isTrue", isTrue);

let age = 30; // Number
console.log("age", age);

let bigInt = 12345678901234567890n; // BigInt
console.log("bigInt", bigInt);

let message = "Hello World!"; // String
console.log("message", message);

let notAssigned; // undefined
console.log("notAssigned", notAssigned);

let uniqueSymbol = Symbol("unique"); // Symbol
console.log("uniqueSymbol", uniqueSymbol);

let noObject = null; // null
console.log("noObject", noObject);

let num = 10;
let str = "hello";
let combined = num + str; // Coerces num to string ("10hello")
console.log("combined", combined);

let numStr = "20";
let result = numStr * 2; // Coerces numStr to number (40)
console.log("result", result);

let truthy = true;
let falsy = false;
let added = truthy + falsy;  // Coerces truthy to 1, falsy to 0 (1)
console.log("added", added);

let val1 = null;
let val2 = undefined;
let sum = val1 + val2; // Coerces both to 0 (0)
console.log("sum", sum);