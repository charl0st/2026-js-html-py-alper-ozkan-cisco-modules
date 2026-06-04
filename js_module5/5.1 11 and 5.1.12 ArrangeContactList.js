//PART 1
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


let running = true;
let choice;
while (running) {
    manageContacts();
    running = choice.toLowerCase() !== "quit";
}


let showIndexList = (clist, i) =>{
    if(!(clist instanceof Array)){
        console.log(`Error:It is not elements of array!`);
        return false;
    }
    if(i < 0 || i > clist.length){
        console.log(`Error:Out of the range`);
        return false;
    }

    console.log(`Name:`,clist[i].name)
    console.log(`E-mail:`,clist[i].email)
    console.log(`Phone:`,clist[i].phone)
    return true;
}

function showContacts(clist){
    let choice = true;
    while(choice){
    let check_choice = Number(prompt("What you want ? \n1-Show First Person\n2-Show Last Person\n" +
    "3-Displayy All Contacts\n4-Add New Contack\n5-Quit"))
    switch (check_choice){
        case 1: console.log(contacts[0])
            break;
        case 2:
            console.log(contacts[contacts.length -1])
            break;
        case 3:
            for(let X in contacts){
                console.log(X);
            }
            break;

        case 4:
            let name =prompt("Enter a  name:");
            let phone =prompt("Enter a phone:");
            let email =prompt("Enter a e-mail:");
            let array_elements = {name,phone,email}
            contacts.push(array_elements)
            console.log(contacts[contacts.length-1])
            break;
        case 5:
            choice = false;
            break;
        default:
            console.log("Please enter valid input!");
        }
    }
}

function showAll(clist){
    for(let n=0; 0 < clist.length ; n++ ){
        console.log(`Name:`,clist[n].name)
        console.log(`E-mail:`,clist[n].email)
        console.log(`Phone:`,clist[n].phone)
        console.log(` `)
    }
    return true
}

function showContacts(clist){
    let choice = true;
    while(choice){
    let check_choice = Number(prompt("What you want ? \n1-Show First Person\n2-Show Last Person\n" +
    "3-Displayy All Contacts\n4-Add New Contack\n5-Quit"))
    switch (check_choice){
        case 1: console.log(contacts[0])
            break;
        case 2:
            console.log(contacts[contacts.length -1])
            break;
        case 3:
            console.log(`Display all contacts:`)
            showAll(clist);
            break;

        case 4:
            addNewContact(clist)
            break;
        case 5:
            choice = false;
            break;
        default:
            console.log("Please enter valid input!");
        }
    }
}

function addNewContact(clist){
    if(!(clist instanceof Array))
        return false;
    let name =prompt("Enter a  name:");
    let phone =prompt("Enter a phone:");
    let email =prompt("Enter a e-mail:");

    if(!(name && phone && email))
        return false;

    let new_cont = {name,phone,email}
    clist.push(new_cont);
    return true;
}


function showContacts(clist){
    let choice = true;
    while(choice){
    let check_choice = Number(prompt("What you want ? \n1-Show First Person\n2-Show Last Person\n" +
    "3-Displayy All Contacts\n4-Add New Contack\n5-Quit"))
    switch (check_choice){
        case 1: console.log(contacts[0])
            break;
        case 2:
            console.log(contacts[contacts.length -1])
            break;
        case 3:
            console.log(`Display all contacts:`)
            showAll(clist);
            break;

        case 4:
            let name =prompt("Enter a  name:");
            let phone =prompt("Enter a phone:");
            let email =prompt("Enter a e-mail:");
            let array_elements = {name,phone,email}
            contacts.push(array_elements)
            console.log(contacts[contacts.length-1])
            break;
        case 5:
            choice = false;
            break;
        default:
            console.log("Please enter valid input!");
        }
    }
}
//--------------------------------------------------------------------------------------------------------------
//PART 2:

function showContacts(clist){
    let choice = true;
    while(choice){
    let check_choice = Number(prompt("What you want ? \n1-Show First Person\n2-Show Last Person\n" +
    "3-Displayy All Contacts\n4-Add New Contack\n5-Sort\n6-Quit"))
    switch (check_choice){
        case 1: console.log(contacts[0])
            break;
        case 2:
            console.log(contacts[contacts.length -1])
            break;
        case 3:
            console.log(`Display all contacts:`)
            showAll(clist);
            break;

        case 4:
            let name =prompt("Enter a  name:");
            let phone =prompt("Enter a phone:");
            let email =prompt("Enter a e-mail:");
            let array_elements = {name,phone,email}
            contacts.push(array_elements)
            console.log(contacts[contacts.length-1])
            break;
        case 5:
            let key = readlineSync.question(`Sort : name, phone, email ?`);
            sortCont(clist,key.toLowerCase());
            showAll(clist);
            break;
        case 6:
            choice = false;
            break;
        default:
            console.log("Please enter valid input!");
        }
    }
}

function sortCont(clist,key){
    if (!(contactList instanceof Array)) {
        console.log("Error: Invalid array.");
        return false;
    }

    if (contactList.length === 0) {
        console.log("No contacts to sort.");
        return true;
    }


    if (key !== 'name' && key !== 'phone' && key !== 'email') {
        console.log("Error: Invalid sort key. Choose name, phone, or email.");
        return false;
    }

    clist.sort((a,b)=> {
        let valA = String(a[key] || '').toLowerCase();
        let valB = String(b[key] || '').toLowerCase();

        if(valA > valB)
            return 1;
        if(valB > valA)
            return -1;

        return 0;
    })

}