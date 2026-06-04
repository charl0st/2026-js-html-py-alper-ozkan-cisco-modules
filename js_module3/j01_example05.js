const ops = ["addition", "subtraction", "multiplication", "division", "exponentiation"];

const a = Number(prompt("Value 1:"));
const b = Number(prompt("Value 2:"));
const selection = Number(prompt("Select (0 to 4):"));

let output;
const method = ops[selection];

if (method === "addition") {
    output = a + b;
} else if (method === "subtraction") {
    output = a - b;
} else if (method === "multiplication") {
    output = a * b;
} else if (method === "division") {
    output = a / b;
} else if (method === "exponentiation") {
    output = a ** b;
} else {
    output = "Unknown Operation";
}

console.log("Mode:", method);
console.log("Final:", output);