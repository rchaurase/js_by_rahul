const userEmail = []

if(userEmail){
  console.log('Got user email');
}else{
  console.log(" Don't have a user email");
}
if(userEmail.length === 0){
  console.log('Array is empty');
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
  console.log('Object is empty');
}



// falsy values :- false,0,-0,BigInt,0n, "",null, undefined,NaN

// Truthy values :- "0", 'false'," ", [],{},function(){}

// Nullish Coalescing Operator (??): null undefined

let val;
// val1 = 5 ?? 10 // for a special case
// val2 = null ?? 10

// val = undefined ?? 15
val = null ?? 10 ?? 10

// console.log(val1)
// console.log(val2)
console.log(val)

//Nullish coalescing and ternary operator are different operator
// Ternary operator :-  Condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log('less than 80'): console.log('greater than 80')
