let fruits = ["apple", "banana", "orange"];
console.log("fruits[1]", fruits[1]);  // Accessing an element by index (zero-based)

let numFruits = fruits.length;  // numFruits will be 3
console.log("numFruits", numFruits);

let vegetables = ["potato", "carrot", "tomato", "carrot"];
let carrotIndex = vegetables.indexOf("carrot");  // carrotIndex will be 1
console.log("carrotIndex", carrotIndex);

let missingItem = vegetables.indexOf("broccoli");  // missingItem will be -1
console.log("missingItem", missingItem);