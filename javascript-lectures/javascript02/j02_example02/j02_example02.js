function calculateOutput() {
    const input1 = parseInt(document.getElementById("input1").value);
    const input2 = parseInt(document.getElementById("input2").value);
    const selectedGate = document.getElementById("gate").value;
    let output;

    switch (selectedGate) {
        case "and":
            output = input1 && input2; // AND operation
            break;
        case "or":
            output = input1 || input2; // OR operation
            break;
    }

    document.getElementById("output").textContent = output;
}
