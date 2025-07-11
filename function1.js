// Example of lexical scoping: inner function accessing outer variable
function one(){
    const username = "abc";
    function two(){
        const website = "youtube";
        console.log(username); // Output: abc
    }
    two();
}
one();

// Object with method using 'this' to access properties
const user = {
    username: "shashi",
    price: 123,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
user.welcomeMessage();       // Output: shashi, welcome to website
user.username = "abc";
user.welcomeMessage();       // Output: abc, welcome to website

// Arrow function with implicit return
const add = (num1, num2) => num1 + num2;
console.log(add(3, 4));      // Output: 7

// Arrow function with block body and explicit return
const add1 = (num1, num2) => {
    return num1 + num2;
}
console.log(add1(8, 8));     // Output: 16
