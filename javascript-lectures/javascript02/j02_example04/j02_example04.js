function addStudent() {
    const name = prompt("Enter student name:");

    if (name) {
        const listItem = document.createElement("li");
        listItem.textContent = name;
        studentList.appendChild(listItem);
    }
}
