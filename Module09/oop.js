const { truncate } = require("fs");

const user ={
  userName :'Rahul',
  loginCount:'8',
  signedIn:true,

  getUserDetails: function(){
    // console.log('got user details from database');
    // console.log(`UserName: ${this.userName}`);
    console.log(this);
  }
}


console.log(user.userName);
//console.log(user.getUserDetails());
console.log(this);

function User(userName,loginCount,isLoggedIn){
  this.userName = userName
  this.loginCount = loginCount
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
    console.log('hey good morning');
  }

   return this
}

const userOne = new User('rahul',23,true)
const usertwo = new User('arya',33,false)
// console.log(usertwo);
console.log(userOne.constructor);


// new create new empty object 
//-->constructor function call because of new 
//--> this keyword inject inside the argument that you have given
//

