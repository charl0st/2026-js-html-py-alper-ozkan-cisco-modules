// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function temperatureConverter() {
    let resultDiv = document.getElementById("result");

    // Get user input for temperature and conversion type
    let temperature = parseFloat(prompt("Enter temperature: "));

    let typeInput = prompt("Enter conversion type (C or F): ");
    if (typeInput === null) return;

    let type = typeInput.toUpperCase();

    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid number for temperature.";
        return;
    }

    // Check for valid conversion type
    if (type === "C" || type === "F") {
        let convertedTemp;

        // Convert temperature based on type
        if (type === "C") {
            convertedTemp = celsiusToFahrenheit(temperature);
        } else {
            convertedTemp = fahrenheitToCelsius(temperature);
        }

        let targetUnit = (type === "C" ? "F" : "C");
        resultDiv.textContent = `${temperature}°${type} is equal to ${convertedTemp.toFixed(2)}°${targetUnit}`;
    } else {
        resultDiv.textContent = "Invalid conversion type. Please enter 'C' or 'F'.";
    }
}