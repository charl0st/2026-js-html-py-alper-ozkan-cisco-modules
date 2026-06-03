function generateTable() {
    const number = parseInt(document.getElementById("number").value);

    if (isNaN(number)) {
        document.getElementById("table").textContent = "Please enter a valid number.";
        return;
    }

    let tableContent = "<table>";
    tableContent += "<tr><th>Multiplication Table for:</th><td>" + number + "</td></tr>";

    for (let i = 1; i <= 10; i++) {
        tableContent += "<tr><td>" + number + " x " + i + "</td><td>" + (number * i) + "</td></tr>";
    }

    tableContent += "</table>";
    document.getElementById("table").innerHTML = tableContent;
}
