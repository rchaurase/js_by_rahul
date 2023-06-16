// Immediately Invoked Function Expression (IIFE)

(function chai(){
  console.log(`DB connected`)
})();
// Named iife

//global scope ke polution se problem hoti hai us global scope ke jo variable hai ya jo bhi vaha declaration hai 
// us polution ko hatane ke liye IIFE ka use kiya jata hai 

( (name) =>{
  console.log(`DB CONNECTED ${name}`)
} )('rahul')
// simple iife

