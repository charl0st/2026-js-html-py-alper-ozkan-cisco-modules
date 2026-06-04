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
    let resultDiv= document.getElementById("Results");
    let check_choice = prompt("What you want ? \n1-Show First Person\n2-Show Last Person\n3-Add New Contack")

    switch (check_choice){
        case 1:
            resultDiv.innerHTML = "<p> ${arr[0].name} ${arr[0].phone} ${arr[0].email} </p>"
            break;
        case 2:
            reultDiv.innerHTML = "<p> ${arr[arr.lenght-1].name} ${arr[arr.lenght-1].phone} ${arr[arr.lenght-1].email} </p>"
            break;
        case 3:
            let name =prompt("Enter a  name:");
            let phone =prompt("Enter a phone:");
            let email =prompt("Enter a e-mail:");
            let array_elements = {name,phone,email}
            arr.push(array_elements);
             resultDiv.innerHTML = "<p>" + name + " " + phone + " " + email + "</p>";
            break;
        default:
            console.log("Please enter valid input!");
    }
}