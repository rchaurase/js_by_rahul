var mylist = [["cereal",3],["milk",2],["bananas",3],["juice",2],["orange",12]] // Arrays of array

function ourReusableFunction(){
  console.log("hey this is function");
}

ourReusableFunction();
ourReusableFunction();
ourReusableFunction();

var sum = 0;

function addThree(){
  sum = sum + 3;
}
function addFive(){
  sum = sum + 5;
}

addFive();

var changed = 0;

function change(num){
  return (num + 5)/3;
}

changed = change(10);

var processed = 0;

function processArg(num){
  return (num + 3)/5;
}

processed = processArg(6);

console.log(changed);

console.log(processed);

function nextInline(arr,item){
  arr.push(item)
  return arr.shift(); 
}

var testArr = [1,2,3,4,5];

console.log("before: " + JSON.stringify(testArr));

console.log(nextInline(testArr,6));

console.log("After : " +JSON.stringify(testArr));

function ourTrueOrFalse(isItTrue){
  if(isItTrue){
    return "Yes , it's true";
  }
  return "No , it's not true";
}

function trueOrFalse(wasThatTrue){
    
    if(wasThatTrue){
      return "ys , that was true"
    } 
    return "No , that was false";

}

console.log(trueOrFalse(true));

console.log(ourTrueOrFalse(false));
