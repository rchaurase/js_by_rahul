const { error } = require("console");

const promiseOne = new Promise(function(resolve,reject){
  //Do an async task
  //DB calls,cryptography,network
  setTimeout(() => {
    console.log('async task is complete');
    resolve()
  }, 1000);
})

promiseOne.then(function(){
  console.log('promise consumed');
})

new Promise(function(resolve,reject){
  setTimeout(() => {
    console.log('async task 2');
    resolve()
  }, 1000);
}).then(function(){
  console.log('async 2 resolved');
})


const promiseThree = new Promise(function(resolve,reject){
     setTimeout(function(){
      resolve({user:'rahul',email:'rhl@mail.com'})
     },1000)
})
promiseThree.then(function(user){
        console.log(user);
})

const promiseFourth = new Promise(function(resolve,reject){
  setTimeout(() => {
    let error = false;
    if(!error){
      resolve({username:'dragon',password:'1234@promis'})
    }else{
      reject('ERROR: Something went wrong')
    }
  }, 1000);
})
 promiseFourth
     .then((user)=>{
        console.log(user);
        return user.username
      })
     .then(function(username){
         console.log(username);
      })
     .catch(function(error){
         console.log(error);
      }).finally(()=>{
         console.log('The promise is either is resolve or rejected');
      })

const promiseFive = new Promise(function(resolve,reject){
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({
         userName:'wolf',password:'arya@123'
      })
    }else{
      reject('ERROR: JS went Wrong')
    }
  }, 1000);
})

async function consumePromiseFive(){
  const response = await promiseFive
  try{
  console.log(response);
    
  } catch(error){
    console.log(error);
  }
}
consumePromiseFive()

// async function getAllUser(){
//    try{
//     const response = await fetch('https://jsonplaceholder.typicod.com/users')
//     const data = await response.json()
//     console.log(data);
//    }catch(error){
//        console.log('E: ',error)    
//    }
// }

// getAllUser()

fetch('https://api.github.com/users/hiteshchoudhary').then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>{
  console.log(error);
})






