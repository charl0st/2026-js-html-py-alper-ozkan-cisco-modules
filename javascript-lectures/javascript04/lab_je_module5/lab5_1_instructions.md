## LAB 5.1.11: Functions (Part 1) - refactoring

### STEP 1: Create `showContact(contactList, index)`

This function should display a single contact from the `contactList` at the given `index`. It needs to perform argument validation.

**a) Define the function:** Replace the existing `showContact` function with the new one.

```javascript
/**
 * Displays a single contact from the given list at a specific index.
 * @param {Array} contactList - The array of contacts.
 * @param {number} index - The index of the contact to display.
 * @returns {boolean} - True if successful, false otherwise.
 */
function showContact(contactList, index) {
    // 1. Check if contactList is an array
    if (!(contactList instanceof Array)) {
        console.log("Error: The first argument must be an array of contacts.");
        return false; // Indicate failure
    }

    // 2. Check if the index is valid
    if (index < 0 || index >= contactList.length || typeof index !== 'number') {
        console.log("Error: Invalid contact index or no contact at this position.");
        return false;
    }

    // 3. Display the contact
    const contact = contactList[index];
    console.log("  Name:", contact.name);
    console.log("    Phone:", contact.phone);
    console.log("    Email:", contact.email);
    return true; // Indicate success
}
```

**b) Modify `manageContacts` to use `showContact`:** Update the `case "first"` and `case "last"` blocks in the `switch` statement to call the new `showContact` function with the `contacts` array and the appropriate index.

```javascript
// ... inside the manageContacts function ...
switch (choice.toLowerCase()) {
    case "first":
        if (contacts.length > 0) {
            console.log("First Contact:");
            showContact(contacts, 0); // Call the new showContact
        } else {
            console.log("There are no contacts in the list.");
        }
        break;
    case "last":
        if (contacts.length > 0) {
            console.log("Last Contact:");
            showContact(contacts, contacts.length - 1); // Call the new showContact
        } else {
            console.log("There are no contacts in the list.");
        }
        break;
    // ... other cases remain the same for now
}
```

### STEP 2: Create `showAllContacts(contactList)`

This function should display all contacts in the `contactList`. It needs to perform argument validation.

**a) Define the function:** This function will encapsulate the logic previously found in the `case "all"` block of the old `showContact` function.

```javascript
/**
 * Displays all contacts in the given list.
 * @param {Array} contactList - The array of contacts.
 * @returns {boolean} - True if successful (even if list is empty), false on argument error.
 */
function showAllContacts(contactList) {
    if (!(contactList instanceof Array)) {
        console.log("Error: The argument must be an array of contacts.");
        return false;
    }

    if (contactList.length === 0) {
        console.log("There are no contacts in the list.");
        return true; // Still success, just no contacts
    }

    console.log("Contacts:");
    for (let i = 0; i < contactList.length; i++) {
        console.log(`Contact ${i + 1}:`);
        showContact(contactList, i); // Re-use showContact to display each individual contact for better modularity
    }
    return true;
}
```

**b) Modify `manageContacts` to use `showAllContacts`:** Update the `case "all"` block in the `switch` statement.

```javascript
// ... inside the manageContacts function ...
switch (choice.toLowerCase()) {
    // ... cases "first" and "last" as updated above ...
    case "all":
        showAllContacts(contacts); // Call the new showAllContacts
        break;
    // ... other cases remain the same for now
}
```

### STEP 3: Create `addNewContact(contactList, name, phone, email)`

This function should add a new contact to the `contactList`. It needs to perform argument validation for both the list and the new contact's data.

**a) Define the function:** This function will replace the existing `addContact` function.

```javascript
/**
 * Adds a new contact to the given contact list.
 * @param {Array} contactList - The array of contacts to which the new contact will be added.
 * @param {string} name - The name of the new contact.
 * @param {string} phone - The phone number of the new contact.
 * @param {string} email - The email of the new contact.
 * @returns {boolean} - True if the contact was added successfully, false otherwise.
 */
function addNewContact(contactList, name, phone, email) {
    if (!(contactList instanceof Array)) {
        console.log("Error: The first argument must be an array of contacts.");
        return false;
    }

    // Check if new contact data have any value
    if (!name || !phone || !email) {
        console.log("Error: Please provide name, phone, and email for the new contact.");
        return false;
    }

    contactList.push({ name, phone, email });
    console.log("Contact added successfully!");
    return true;
}
```

**b) Modify `manageContacts` to use `addNewContact`:** Update the `case "new"` block in the `switch` statement. You'll need to collect the input from the user before calling `addNewContact`.

```javascript
// ... inside the manageContacts function ...
switch (choice.toLowerCase()) {
    // ... cases "first", "last", and "all" as updated above ...
    case "new":
        let newName = readlineSync.question("Enter contact name: ");
        let newPhone = readlineSync.question("Enter contact phone number: ");
        let newEmail = readlineSync.question("Enter contact email: ");
        addNewContact(contacts, newName, newPhone, newEmail); // Call the new addNewContact
        break;
    case "quit":
        console.log("Exiting program.");
        break;
    default:
        console.log("Invalid choice. Please enter 'first', 'last', 'all', 'new', or 'quit'");
}
```

### STEP 4: Test your changes

Run `node lab5_1.js` in your terminal to test if the program works as expected after these modifications.

---

## LAB 5.1.12: Functions (Part 2) - adding sorting

### STEP 1: Add a `sort` option to user choices

First, we need to let the user know that 'sort' is a new available action.

**a) Modify the `manageContacts` prompt:** Update the `readlineSync.question` message to include `sort`.

```javascript
// ... inside manageContacts function ...
choice = readlineSync.question("What do you want to do? (first/last/all/new/sort/quit): ");
// ...
```

**b) Add a `case "sort"` to the `switch` statement:** For now, it can just print a message, but we'll add the logic there soon. Also, update the `default` message to reflect the new option.

```javascript
// ... inside manageContacts function ...
switch (choice.toLowerCase()) {
    // ... existing cases (first, last, all, new) ...
    case "sort":
        console.log("You chose to sort contacts.");
        // We'll add the sorting logic here in the next steps
        break;
    case "quit":
        console.log("Exiting program.");
        break;
    default:
        console.log("Invalid choice. Please enter 'first', 'last', 'all', 'new', 'sort', or 'quit'");
}
```

### STEP 2: Create a `sortContacts(contactList, key)` function

This function will handle the actual sorting logic. It will take the `contactList` and a `key` (e.g., `name`, `phone`, `email`) by which to sort.

**Define the `sortContacts` function:** This function will use the `Array.prototype.sort()` method and a comparison function. We'll use arrow functions for conciseness.

```javascript
/**
 * Sorts the contact list by a specified key (name, phone, or email).
 * @param {Array} contactList - The array of contacts to sort.
 * @param {string} key - The contact property to sort by ('name', 'phone', or 'email').
 * @returns {boolean} - True if sorting was attempted, false if arguments are invalid.
 */
function sortContacts(contactList, key) {
    if (!(contactList instanceof Array)) {
        console.log("Error: The first argument must be an array of contacts.");
        return false;
    }

    if (contactList.length === 0) {
        console.log("No contacts to sort.");
        return true; // Still a success, just nothing to sort
    }

    // Define a valid set of keys
    const validKeys = ['name', 'phone', 'email'];
    if (!validKeys.includes(key)) {
        console.log(`Error: Invalid sort key. Please choose from ${validKeys.join(', ')}.`);
        return false;
    }

    // Use the sort method with a custom comparison function
    contactList.sort((a, b) => {
        // Lowercase for case-insensitive comparison and ensure it's a string and handle undefined/null
        const valA = String(a[key] || '').toLowerCase();
        const valB = String(b[key] || '').toLowerCase();

        if (valA < valB) {
            return -1; // a comes before b
        }
        if (valA > valB) {
            return 1; // a comes after b
        }
        return 0; // a and b are equal
    });

    console.log(`Contacts sorted by ${key}.`);
    return true;
}
```

### STEP 3: Integrate sorting into `manageContacts`

Now, we'll ask the user for the sorting key and then call our new `sortContacts` function.

**Modify the `case "sort"` block:**

```javascript
// ... inside manageContacts function ...
switch (choice.toLowerCase()) {
    // ... existing cases ...
    case "sort":
        let sortByKey = readlineSync.question("Sort by (name/phone/email): ");
        sortContacts(contacts, sortByKey.toLowerCase());
        // It's good practice to show all contacts after sorting to see the effect
        showAllContacts(contacts);
        break;
    // ... existing cases ...
}
```

### STEP 4: Test your changes

Run `node lab5_1.js` in your terminal to test if the program works as expected after these modifications.

Alright, here's the condensed instruction for your LAB 5.1.ADDITIONAL, focusing only on the search and delete functionalities, along with the code examples:

---

## LAB 5.1.ADDITIONAL: Functions (Part 3) - adding search and delete

For students who have successfully completed the previous steps and have time for an additional challenge, you need to add **search** and **delete** functionalities to the contact management program.

### STEP 1: Add a `searchContacts(contactList, searchTerm)` function:
* This function should take the `contactList` and a `searchTerm` as arguments.
* It should search for contacts where the `searchTerm` (case-insensitive) appears in either the `name`, `phone`, or `email` field.
* The function should return a **new array** containing all matching contacts. If no contacts are found, it should return an empty array.
* Implement proper argument validation for `contactList` and `searchTerm`.
* **Hint:** Use the array method **`.filter()`** to achieve this. It creates a **new array** with all elements that pass the test implemented by the provided function.
```javascript
const lowerCaseSearchTerm = searchTerm.toLowerCase();
return contactList.filter(contact => {
    return (contact.name && contact.name.toLowerCase().includes(lowerCaseSearchTerm));
});
```

### STEP 2: Integrate `search` into `manageContacts`:
* Update the `manageContacts` prompt to include a `search` option.
* Add a new `case "search"` to the `switch` statement.
* Inside this case, prompt the user for the `searchTerm`.
* Call `searchContacts` with the `contacts` array and `searchTerm`.
* If matching contacts are found, display them using your `showAllContacts(searchResults)` function. If no matches, inform the user.

### STEP 3: Add a `deleteContact(contactList, indexToDelete)` function:
* This function should remove a contact from the `contactList` at the specified `indexToDelete`.
* It should perform thorough argument validation, ensuring `contactList` is an array and `indexToDelete` is a valid, existing index within the list.
* After successful deletion, it should confirm the action to the user.
* The function should return `true` on success and `false` on failure (e.g., invalid index).
* **Hint:** Use the array method **`.splice()`** to remove the element. This method **changes the contents of an array** by removing existing elements and/or adding new ones.
```javascript
const deletedContact = contactList.splice(indexToDelete, 1);
if (deletedContact.length > 0) {
    // ...
} else {
    // ...
}
```

### STEP 4: Integrate `delete` into `manageContacts`:
* Update the `manageContacts` prompt to include a `delete` option.
* Add a new `case "delete"` to the `switch` statement.
* Inside this case, first display all contacts (or a specific range if the list is very long) with their numerical indices so the user can easily identify which contact to delete.
* Prompt the user to enter the **number (index)** of the contact they wish to delete. Remember that user input for index will likely be 1-based, so convert it to a 0-based index for array manipulation.
* Call `deleteContact` with the `contacts` array and the converted index.
* Provide feedback to the user on the outcome of the deletion.