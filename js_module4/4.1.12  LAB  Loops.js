/*display the first contact (first)
display the last contact (last)
display all contacts (all)
add a new contact (new)
exit the program (quit)
*/

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



