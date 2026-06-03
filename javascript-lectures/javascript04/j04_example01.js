// Example 1 - Declaring and Calling Functions in JavaScript
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

temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
getMeanTemp();
console.log("mean:", meanTemp);

// // Example 2 - The `return` Statement in Functions
// let temperatures;
//
// function getMeanTemp() {
//     let sum = 0;
//     for (let i = 0; i < temperatures.length; i++) {
//         sum += temperatures[i];
//     }
//     return sum / temperatures.length; // Return the calculated mean temperature
// }
//
// temperatures = [12, 12, 11, 11, 10, 9, 9, 10, 12, 13, 15, 18, 21, 24, 24, 23, 25, 25, 23, 21, 20, 19, 17, 16];
// console.log("mean:", getMeanTemp());