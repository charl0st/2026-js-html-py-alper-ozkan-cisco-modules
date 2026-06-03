// Example 1 - Iterative Approach
function factorial(n) {
    let result = 1;
    while (n > 1) {
        result *= n;
        n--;
    }
    return result;
}

console.log(factorial(6)); // -> 720

// Example 2 - Recursive Approach
// function factorial(n) {
//     return n > 1 ? n * factorial(n - 1) : 1;
// }
//
// console.log(factorial(6)); // -> 720

