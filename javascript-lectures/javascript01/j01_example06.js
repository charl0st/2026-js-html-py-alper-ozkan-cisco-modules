let numbers = [1, 2, 3];
numbers.push(4, 5);  // Adding elements to the end
console.log("numbers.push(4, 5)", numbers);  // [1, 2, 3, 4, 5]
console.log("");

numbers.unshift(0);  // Adding elements to the beginning
console.log("numbers.unshift(0)", numbers);  // [0, 1, 2, 3, 4, 5]
console.log("");

let removedElement = numbers.pop();  // Removing and storing the last element
console.log("removedElement", removedElement);  // 5
console.log("numbers.pop()", numbers);  // [0, 1, 2, 3, 4]
console.log("");

removedElement = numbers.shift();  // Removing and storing the first element
console.log("removedElement", removedElement);  // 0
console.log("numbers.shift()", numbers);  // [1, 2, 3, 4]
console.log("");