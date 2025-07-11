const mysum = Symbol("key1");  // Creating a unique Symbol key

const user = {
    name: "Shashi",                  // User's first name
    [mysum]: "mykey1",               // Symbol-keyed property (not enumerable)
    "fullname": "khatkar",           // User's full name
    class: "MCA",                    // User's class
    age: 23                          // User's age
};

console.log(user);                  // Logs the entire user object
console.log(user.name);            // Logs the 'name' property
console.log(user["fullname"]);     // Logs the 'fullname' using bracket notation
console.log(typeof user[mysum]);   // Logs the type of Symbol-keyed value
console.log(user[mysum]);          // Logs the value of Symbol-keyed property

user.email = "shashi@gmail.com";   // Adds a new 'email' property to user
Object.freeze(user);               // Freezes the object to prevent further changes
user.email = "shashi1@gmail.com";  // Attempt to change email after freeze (won't work)
console.log(user);                 // Logs the user object to confirm email wasn't changed

user.greeting = function() {
    console.log('hello user');
}; // Method to print a generic greeting

user.greetingOne = function() {
    console.log(`Hello,${this.name}`);
}; // Method to greet the user using their name

console.log(user.greeting());      // Calls greeting method and logs its result (undefined)
console.log(user.greetingOne());   // Calls greetingOne method and logs its result (undefined)
