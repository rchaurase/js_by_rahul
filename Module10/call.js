function setUserName(username){
    this.username = username
    console.log('called');
}

function createUser(username,email,password){
   setUserName.call(this,username)
  this.email = email
  this.password = password
}

const chai = new createUser('chai','chai@123.com','1234@rahul')

console.log(chai);