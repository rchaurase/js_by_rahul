 //object literals

const { count } = require("console")

const mySym = Symbol('key1')
 const jsUser ={
  name:'rahul',
  "Full name" : 'rahul chaurase',
  age:25,
  mySym:'mykey1',
  location: 'jaipur',
  email: 'rahulchaurase3@gmail.com',
  isLoggedIn : false,
  lastLoginDays : ['monday','saturday']
 }

 console.log(jsUser.name)
 console.log(jsUser["Full name"])
 console.log(jsUser["mySym"])

 jsUser.email = 'chauraserahul56@gmail.com'

  // Object.freeze(jsUser)

  jsUser.email = 'rahulc@bing.com'

  console.log(jsUser);

  jsUser.greeting = function(){
    console.log('hello js user')
  }
  jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`)
  }

  console.log(jsUser.greeting())
  console.log(jsUser.greetingTwo())

  //Part Two

  //object singleton with constructor

 // const tinderUser = new Object() // Singleton object

  const tinderUser = {}

  tinderUser.id = '123abc'
  tinderUser.name = 'rahul'
  tinderUser.age = 23
  tinderUser.isLoggedIn = false

  // console.log(tinderUser)

  const regularUser = {
    email:'rahulchaurase3@gmail.com',
    fullname:{
      userFullname:{
        firstname:'rahul',
        lastname:'chaurase'
      }
    }
  }

// console.log(regularUser.fullname.userFullname.firstname)

const obj1 = {1:'a',2:'b'}
const obj2 = {3:'c',4:'d'}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1,...obj2}
// console.log(obj3)

const users = [
  {
  id:1,
  email:'rahulchaurase3@gmail.com'
},
  {
  id:1,
  email:'rahulchaurase3@gmail.com'
},
  {
  id:1,
  email:'rahulchaurase3@gmail.com'
},
  {
  id:1,
  email:'rahulchaurase3@gmail.com'
},
  {
  id:1,
  email:'rahulchaurase3@gmail.com'
},
  {
  id:1,
  email:'rahulchaurase3@gmail.com'
},
  {
  id:1,
  email:'rahulchaurase3@gmail.com'
}
]
users[1].email
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'))

// Part Three  (Destructuring)

const course = {
  couse_name : 'js in hindi',
  price : "999",
  course_instructor: "Hitesh"
}

const {course_instructor:instructor} = course

console.log(instructor)

// API  

