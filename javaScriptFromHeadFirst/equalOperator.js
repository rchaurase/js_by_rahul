function testEqual(val){
  if(val == "12"){
    return "Equal";
  }
  return "Not-Equal"
}

// strict-equal-sign

function strictTestEqual(val){
  if(val === "12"){
    return "Equal";
  }
  return "Not-Equal"
}

console.log(testEqual(23));
console.log(testEqual(12));

console.log(strictTestEqual(12));
console.log(strictTestEqual("12"));
// not-equal

function testNoEqual(val){
  if(val != 99){
    return "Not-Equal";
  }
  return "Equal";
}

console.log(testNoEqual(10));

// strict-InEquality-operator

function testStrictNotEqual(val){
  if(val !== 17){
    return "Not-Equal";
  }
  return "Equal";
}

console.log(testStrictNotEqual(10));

