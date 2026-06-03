function addTodo() {
    const newTodoText = newTodoInput.value.trim(); // Trim whitespace
    if (newTodoText.length === 0) return; // Don't add empty tasks

    const listItem = document.createElement("li");
    const todoText = document.createElement("span");
    todoText.textContent = newTodoText;
    listItem.appendChild(todoText);

    todos.push(newTodoText); // Add to array
    todoList.appendChild(listItem);
    newTodoInput.value = ""; // Clear input field

    updateTodoCount();
}

function updateTodoCount() {
    let count = 0; // Initialize counter
    let i = 0; // Loop counter

    while (i < todos.length) {
        count++; // Increment counter for each item in the array
        i++;
    }

    todoCountSpan.textContent = count; // Update displayed count
}