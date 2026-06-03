let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
    currentNumber += number;
    document.getElementById("display").value = currentNumber;
}

function appendOperator(op) {
    if (currentNumber !== "") {
        previousNumber = currentNumber;
        currentNumber = "";
        operator = op;
    }
}

function clearDisplay() {
    currentNumber = "";
    previousNumber = "";
    operator = "";
    document.getElementById("display").value = "";
}

function calculate() {
    if (currentNumber !== "" && operator !== "") {
        let result = 0;
        const prevNum = parseFloat(previousNumber);
        const currNum = parseFloat(currentNumber);
        switch (operator) {
            case "+":
                result = prevNum + currNum;
                break;
            case "-":
                result = prevNum - currNum;
                break;
            case "*":
                result = prevNum * currNum;
                break;
            case "/":
                if (currNum !== 0) {
                    result = prevNum / currNum;
                } else {
                    alert("Division by zero!");
                    return;
                }
                break;
        }
        currentNumber = result.toString();
        previousNumber = "";
        operator = "";
    }
    document.getElementById("display").value = currentNumber; // Update display after calculation
}

function appendDecimal() {
    if (!currentNumber.includes(".")) {
        currentNumber += ".";
        document.getElementById("display").value = currentNumber;
    }
}
