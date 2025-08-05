const phoneBook = []

function addContact(name, phone, email) {
    const contact = {
        name: name,
        phone: phone,
        email: email
    };
    phoneBook.push(contact);
    return phoneBook;
}
function displayContacts() {
   console.log(`phoneBook :`);
    phoneBook.forEach(contact => {
        console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    });
}
addContact("chang" , 12345 , "t@gmail.com")
displayContacts();
