const { endianness } = require("os");

function sayHello(){
  console.log('hello I am rahul')
}

// sayHello()

// function addNumber(num1,num2){
//   console.log(num1+num2) ;
// }
function addNumber(num1,num2){
  // let result = (num1+num2) ;
  return num1+num2;
}

const result = addNumber(45, 35)

// console.log("result: " + result)

function loginUserMessage(username = "Sam"){
  if(!username){
      console.log("please enter a username")
      return 
  }
   return `${username} just logged in`
}

// console.log(loginUserMessage('Rahul'))

function AddToCart(...num1){
   return num1;
}
console.log(AddToCart(200,300,399,400,500,600))

const user = {
  username:'rahul',
  price:199
}

function handleObject(anyObject){
  console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user);

handleObject({
  username:'rahul',
  price: 199
})

const myNewArr = [200,300,400,500,600]

function returnSecondValue(getArr){
  return getArr[1]
}

// console.log(returnSecondValue(myNewArr))
console.log(returnSecondValue([200,300,400,500,600]))



