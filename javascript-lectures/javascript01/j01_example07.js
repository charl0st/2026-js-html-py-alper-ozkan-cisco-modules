let colors = ["red", "green", "blue"];
colors.reverse();
console.log("colors.reverse()", colors);  // ["blue", "green", "red"]
console.log("");

let letters = ["a", "b", "c", "d", "e"];
let subArray = letters.slice(1, 4);  // Extracts elements from index 1 (inclusive) to 4 (exclusive)
console.log("letters.slice(1, 4)", subArray);  // ["b", "c", "d"]
console.log("");

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let mergedArray = array1.concat(array2);
console.log(mergedArray);  // [1, 2, 3, 4, 5, 6]

// This is a single-line comment

/* This is a multi-line comment
that can span multiple lines */

/**
 * This function calculates the area of a circle.
 * @param {number} radius The radius of the circle.
 * @returns {number} The area of the circle.
 */
function calculateArea(radius) {
    // ... function implementation
}
