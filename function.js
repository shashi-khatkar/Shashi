// Function to add two numbers
function add(number1, number2){
    let result = number1 + number2;
    return result;
}
const result = add(4, 5);
console.log(result);  // Output: 9

// Function to simulate user login with username (no default value)
function login(username){
    return `${username} just logged in`;
}
console.log(login("shashi"));  // Output: shashi just logged in

// Function to simulate login with a default username and validation
function login(username = "sum"){
    if(!username){
        console.log("please enter a name");
        return;
    }
    return `${username} just logged in`;
}
console.log(login());  // Output: sum just logged in

// Function using rest parameters to return all numbers as an array
function add(...num1){
    return num1;
}
console.log(add(1, 2, 3));  // Output: [1, 2, 3]
