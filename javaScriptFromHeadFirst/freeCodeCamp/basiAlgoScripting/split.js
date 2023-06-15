function factorialize(num) {
  let result = 1;
  for(let i = 1; i <= num; i++){
    
     result *= num;
    console.log(num)
  }
  
  return result;
}

factorialize(5);