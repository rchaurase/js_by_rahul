// function mutation(arr) {
//   const test = arr[1].toLowerCase();
//   const target = arr[0].toLowerCase();
//   for (let i = 0; i < test.length; i++) {
//     if (target.indexOf(test[i]) < 0) return false;
//   }
//   return true;
// }
// console.log(mutation(["hello", "hey"]));
function mutation(arr) {
  let firstValue = arr[0].toLowerCase();
  let secondValue = arr[1].toLowerCase();
  for(let i = 1; i<firstValue.length; i++){
    if(secondValue.indexOf(firstValue[i])<0){
      return false;
    }
}
return true;
}

console.log(mutation(["ate", "date"]));