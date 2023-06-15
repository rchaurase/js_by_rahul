// #1 data types => 
// 7 types : String, Number,Boolean,null, undefined,Symbol , BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')

const anotherId = Symbol('123')

console.log(id == anotherId);

const bigNumber = 3455767585748576875844757n
// #2 premitive type and not premitve =>
// Reference type => (called non premitive ) Arrays, Objects, Functions 
// typeof of non premitive is objects
// typeof of functions object function
// typeof  null  is object


const heros = ["shaktiman","nagraj", "dogs"]
const myObj = {
  name:"rahul",
  age: 22,
}

const myFunction = function(){
  console.log("Hello World");
}

// Stack (premitive), Heap(non-premitive)



let myName = "rahul";


let anotherName = myName;
anotherName = "chaurase";


console.log(myName);

console.log(anotherName);

let userOne = {
  email: "uer@123",
  nameMy:"rahul"
}
 userOne.email = "rahulchaurase3@gmail.com"

let userTwo = userOne;

console.log(userOne.email);

console.log(userTwo.email);