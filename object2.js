const obj1=new Object();
console.log(obj1)
obj1.name="shashi";
obj1.class="mca";
obj1.age=23;
console.log(obj1)
const obj={
    user:{
        name:"abc",
        class:"abc1"
    }
}
console.log(obj.user.name)
//
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };

// Merging obj1 and obj2 using the spread operator into obj3
const obj3 = { ...obj1, ...obj2 };

console.log(obj3); // Display merged object

console.log(Object.keys(obj1)); // Get and display all keys of obj1 as an array
console.log(Object.values(obj1)); // Get and display all values of obj1 as an array

const users = [
    {
        id: 1,
        email: "shashi@gmail.com"
    },
    {
        id: 3,
        email: "shashi1@gmail.com"
    },
    {
        id: 3,
        email: "shashi2@gmail.com"
    }
];

// Access and display the email of the second user (index 1)
console.log(users[1].email);
