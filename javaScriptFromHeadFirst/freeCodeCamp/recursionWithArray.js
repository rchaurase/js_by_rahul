// function countup(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const countArray = countup(n - 1);
//     countArray.push(n);
//     return countArray;
//   }
// }
// console.log(countup(5));

// Only change code below this line

function countdown(n){
  if(n < 1){
    return [];
  }else{
     const myArr = countdown(n-1);
     myArr.unshift(n);
      
    return myArr;
}
  }
 


console.log(countdown(5));