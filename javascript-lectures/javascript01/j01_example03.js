if (true) {
    let x = 10;  // Block-scoped variable
}

// console.log(x); // This line will cause an error (x is not accessible here)

let x = "outer";  // Function-scoped variable

function myFunction() {
    let x = "inner";  // Shadowing the outer variable
    console.log(x); // This will print "inner"
}

myFunction();
console.log(x); // This will print "outer" (original value)
