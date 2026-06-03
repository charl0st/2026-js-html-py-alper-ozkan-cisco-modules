// LAB: 4.0.9
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
    } else {
        console.log("Invalid choice. Please enter 'first' or 'last'");
    }
}

function addContact() {
    let name = prompt("Enter contact name:");
    let phone = prompt("Enter contact phone number:");
    let email = prompt("Enter contact email:");

    // Validate data
    if (name && phone && email) {
        contacts.push({ name, phone, email });
        console.log("Contact added successfully!");
    } else {
        console.log("Please enter all required information (name, phone, email).");
    }
}

function manageContacts() {
    let choice = prompt("What do you want to do? (first/last/new)");

    switch (choice.toLowerCase()) {
        case "first":
            showContact("first");
            break;
        case "last":
            showContact("last");
            break;
        case "new":
            addContact();
            break;
        default:
            console.log("Invalid choice. Please enter 'first', 'last', or 'new'");
    }
}

// Call the management function
manageContacts();
