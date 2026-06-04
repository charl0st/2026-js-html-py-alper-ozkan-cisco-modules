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

let user_choice = function(arr){
    let check_choice = prompt("What you want ? \n1-Show First Person\n2-Show Last Person\n3-Add New Contack")
    switch (check_choice){
        case 1: console.log(arr[0])
            break;
        case 2:
            console.log(arr[arr.length -1])
            break;
        case 3:
            let name =prompt("Enter a  name:");
            let phone =prompt("Enter a phone:");
            let email =prompt("Enter a e-mail:");
            let array_elements = {name,phone,email}
            arr.push(array_elements);
            break;
        default:
            console.log("Please enter valid input!");
    }
}