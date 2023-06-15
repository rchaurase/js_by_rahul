function isFalse(a,b){
  return a<b;
}

console.log(isFalse(8,6));

// retuning early pattern from Functions

function abTest(a ,b){

if(a < 0 || b < 0){
  return undefined;
}



  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b),2));
}

console.log(abTest(6,4));
