//objects 

function multiplyBy5(num){
    return num*5
}

multiplyBy5.power = 2

console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function creatUser(username,score){
  this.username  = username
  this.score = score
}

creatUser.prototype.increment = function(){
  this.score++
}

creatUser.prototype.printMe = function(){
   console.log(`score is ${this.score}`);
}
const chai = new creatUser('chai',25)
const tea = new creatUser('tea',250)


chai.printMe()


/**
 * a new object is created : the new keyword initiates the creatation
 * of a new javascript object.
 * 
 * A prototype is linked: the newly created object gets linked to the prototype
 *property of the constructor function. This means that ut has access to properties and methos=ds define
 on the constructor's prototype.
 
 the constructor is called: The constructor function is called with spacified
 arguments and this is bound to the newly created object. If no ecplicit return value is 
specified from the constructor,javascript assumes this, the newly created object, to be the inteded return value.



 * the new object is returned: 'after the constructor function has been  called ,
if it doesn't return the primitive value(object,array,function,etc..) ,the newly created object  
is returned. 
*/

/**  ********Prototype******************** */


// let myName = 'rahul    '

// console.log(myName.trueLength);

let myArr = ['thor','ironMan','batman']


let heroPower = {
  thor:'hammer',
  ironMan: 'suit',
  batman:'mask',
  getbatmanPower: function(){
    console.log(`batman power is ${this.batman}`);
  }
}

Object.prototype.rahul = function(){
  console.log('rahul is present in all objects');
}



// heroPower.rahul()

myArr.rahul()

Array.prototype.heyRahul = function(){
  console.log('hey i am here');
}

myArr.heyRahul()
// heroPower.heyRahul()
const user ={
  name:'chai',
  email:'chai@google.com'
}
const teacher = {
  makeVideo:true
}
const teacherSupport={
  isAvailable:false
}
const TASupport ={
  makeAssignment:'JS Assignment',
  fullTime:true,
  __proto__:teacherSupport
}

teacher__proto__:user

//Modern syntax

Object.setPrototypeOf(teacherSupport,teacher)

let anotherUserName = 'ChaiAurCode      '

String.prototype.trueLength = function(){
  console.log(`${this}`)
  // console.log(`${this.name}`)
  console.log(`True Length is: ${this.trim().length}`);
}

anotherUserName.trueLength()

'ajay'.trueLength()
'vijay'.trueLength()







