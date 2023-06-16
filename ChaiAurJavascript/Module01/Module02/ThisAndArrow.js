// this keyword tell about the current context

const user = {
  username:'Rahul',
  price:199,

  welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`)
    console.log(this)
  }

}

// user.welcomeMessage()
// user.username = 'sam'
// user.welcomeMessage()

// console.log(this)

// function chai(){
//   let username = 'Rahul'
//   console.log(this.username)
// }
// chai()


// const chai = function(){
//   let username = 'rahul'
//   console.log(this.username)
// }

// chai()
const chai = () => {
  let username = 'rahul'
  console.log(this)
}


// chai()

// const addTwo = (num1,num2) => {
//   return num1 + num2
// }

//const addTwo = (num1,num2) =>   num1 + num2 // implesit return
// const addTwo = (num1,num2) =>   (num1 + num2) 

const addTwo = (num1,num2) =>  ({username:'rahul'})

console.log(addTwo(3,4))

const myAarray = [1,2,3,4,5,6]

myAarray.forEach()






