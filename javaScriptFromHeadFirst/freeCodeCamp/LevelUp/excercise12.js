let arr = [1,2,3,4];
let newArr = [4,1,1,2];
let anotherArr = [1,2,1,2]

function numToStr(arr){
  let output = [];
  for(let i = arr.length -1 ; i >= 0; i--){
    if(arr[i]== 1){
     output.push(arr[i] = "One");
    }else if(arr[i]== 2){
      output.push(arr[i] = "Two");
    }else if(arr[i]== 3){
      output.push(arr[i] = "Three");
    }else if(arr[i]== 4){
      output.push(arr[i] = "Four");
    }
  }
  return output;
}

let result = numToStr(arr);
let result1 = numToStr(newArr);
let result2 = numToStr(anotherArr);

console.log(result);
console.log(result1);
console.log(result2);