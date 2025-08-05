function displayUserInfo(user) {
    const address = user.location && user.location.city ? user.location.city : "unknown";
    const jobTitle = user.job && user.job.title ? user.job.title : "unknown";
    const company = user.job && user.job.company ? user.job.company : "unknown";
    if (!user.contact) {
        console.log(`${user.name} is ${user.age} years old ,lives in ${user.address} , works as ${jobTitle} at ${company} , and can be contact via unknow or unknown.`);
    }
    else {
        console.log(`${user.name} is ${user.age} years old ,lives in ${user.address} , works as ${jobTitle} at ${company} , and can be contact via ${user.contact.email} or ${user.contact.phone}.`);
    }
}
const user1 = {
    name: "Anna",
    age: 30,
    location: { city: "Da Nang", country: "Vietnam" }
}
displayUserInfo(user1);
const user2 = {
    name: "John",
    age: 25,
    location: { city: "Hanoi", country: "Vietnam" },
    contact: { email: "john@example.com", phone: "0123456789" },
    job: { title: "Developer", company: "Tech Corp" }
}
displayUserInfo(user2);

