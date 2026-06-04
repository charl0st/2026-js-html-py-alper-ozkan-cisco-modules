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

let nm = prompt(`Enter a name:`)
let ph = prompt('Enter a phone number, please start 0:')
let eml = prompt('Enter a email address:')

let data = {
    name:nm,
    phone:ph,
    email:eml
};

contacts.push(data);

for (let index = 0; index < contacts.length; index++) {
    console.log(`${contacts[index].name} / ${contacts[index].phone} / ${contacts[index].email}`);
}