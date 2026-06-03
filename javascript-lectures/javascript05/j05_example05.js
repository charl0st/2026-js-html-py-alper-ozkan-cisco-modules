// npm install prompt

const prompt = require('prompt');

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Get user input for temperature and conversion type
prompt.start();

prompt.get(['temperature', 'type'], (err, result) => {
    if (err) {
        console.error(err);
        return;
    }

    const temperature = parseFloat(result.temperature);
    const type = result.type.toUpperCase();

    // Validate conversion type
    if (type !== "C" && type !== "F") {
        console.error("Invalid conversion type. Please enter 'C' or 'F'.");
        return;
    }

    // Convert temperature based on type
    let convertedTemp;
    if (type === "C") {
        convertedTemp = celsiusToFahrenheit(temperature);
    } else {
        convertedTemp = fahrenheitToCelsius(temperature);
    }

    // Display the converted temperature
    console.log(`${temperature}${type} is equal to ${convertedTemp.toFixed(2)}${type === "C" ? "F" : "C"}`);
});
