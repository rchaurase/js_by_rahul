// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer represents a response from a server
//   let responseFromServer = true;

//   if(responseFromServer) {
//     resolve("We got the data");
//   } else {	
//     reject("Data not received");
//   }
// });
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve('We got the data.');
  } else {  
    reject("Data not received.");
  }
});
console.log(makeServerRequest);