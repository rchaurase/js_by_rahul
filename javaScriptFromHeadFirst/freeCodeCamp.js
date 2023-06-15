function checkObj(obj, checkProp) {
  // Only change code below this line
if(obj.hasOwnProperty(checkProp)){//object1.hasOwnProperty('toString')
  return obj[checkProp];
}
   
  return "Not Found";
  // Only change code above this line
}

let a = checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "gift");

console.log(a);

