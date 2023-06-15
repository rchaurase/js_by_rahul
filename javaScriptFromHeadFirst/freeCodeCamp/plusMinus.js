function plusMinus(arr) {
  // Write your code here
  let positiveArr = [];
  let negativeArr = [];
  let zeroArr = [];
  for(let i = 0; i<arr.length; i++){
      if(arr[i]>0){
          positiveArr.push(arr[i])
      }else if(arr[i]<0){
          negativeArr.push(arr[i])
      }else{
          zeroArr.push(arr[i])
      }
  }
  let ratiioOfPositive = positiveArr.length/arr.length;
  let ratioOfNegative = negativeArr.length/arr.length;
  let ratioOfZero = zeroArr.length/arr.length;
  console.log(ratiioOfPositive);
  console.log(ratioOfNegative);
  console.log(ratioOfZero);
  
}
let output = plusMinus([1,2,-2,0,0]);
