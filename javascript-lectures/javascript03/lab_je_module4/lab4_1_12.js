// LAB: 4.1.12
// CMD (install package readline-sync): npm install readline-sync
// CMD (run program): node lab4_1_12.js
const readlineSync = require('readline-sync');

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
}, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
}, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

function showContact(choice) {
    if (choice === "first") {
        if (contacts.length > 0) {
            console.log("First Contact:");
            console.log("  Name:", contacts[0].name);
            console.log("  Phone:", contacts[0].phone);
            console.log("  Email:", contacts[0].email);
        } else {
            console.log("There are no contacts in the list.");
        }
    } else if (choice === "last") {
        if (contacts.length > 0) {
            const lastIndex = contacts.length - 1;
            console.log("Last Contact:");
            console.log("  Name:", contacts[lastIndex].name);
            console.log("  Phone:", contacts[lastIndex].phone);
            console.log("  Email:", contacts[lastIndex].email);
        } else {
            console.log("There are no contacts in the list.");
        }
    } else if (choice === "all") {
        if (contacts.length > 0) {
            console.log("All Contacts:");
            for (let i = 0; i < contacts.length; i++) {
                console.log(`  Contact ${i + 1}:`); // Backticks allow "template literals" for easy variable interpolation.
                console.log("    Name:", contacts[i].name);
                console.log("    Phone:", contacts[i].phone);
                console.log("    Email:", contacts[i].email);
            }
        } else {
            console.log("There are no contacts in the list.");
        }
    } else {
        console.log("Invalid choice. Please enter 'first', 'last', 'all', or 'new'");
    }
}

function addContact() {
    let name = readlineSync.question("Enter contact name: ");
    let phone = readlineSync.question("Enter contact phone number: ");
    let email = readlineSync.question("Enter contact email: ");

    // Validate data
    if (name && phone && email) {
        contacts.push({name, phone, email});
        console.log("Contact added successfully!");
    } else {
        console.log("Please enter all required information (name, phone, email).");
    }
}

function manageContacts() {
    choice = readlineSync.question("What do you want to do? (first/last/all/new/quit): ");

    switch (choice.toLowerCase()) {
        case "first":
        case "last":
        case "all":
            showContact(choice);
            break;
        case "new":
            addContact();
            break;
        case "quit":
            console.log("Exiting program.");
            break;
        default:
            console.log("Invalid choice. Please enter 'first', 'last', 'all', 'new', or 'quit'");
    }
}

// Main loop for continuous user interaction
let running = true;
let choice;
while (running) {
    manageContacts();
    running = choice.toLowerCase() !== "quit";
}
