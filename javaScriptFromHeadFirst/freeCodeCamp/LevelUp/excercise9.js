let myArr = [];
let extctr = 9; 
for(let i = 3; i > 0; i--){
  let ltttlArr = []
  for(let j = 0; j < 3; j++ ){
    ltttlArr.push(extctr);
    extctr--;
  }
  myArr.push(ltttlArr);
}
console.log(myArr);


