//for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  if(element == 5){
    // console.log('5 is best number')
  }
  // console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
  // console.log(`Outer loop value : ${i}`);
   for (let j = 1; j <= 10; j++) {
    //  console.log(`inneer loop value: ${j}`);
    // console.log(i + '*' + j + ' = ' + i*j)
   }
  
}

let myArr = ['Flash', 'batman','superman']

for(i = 0; i<myArr.length; i++){
  const superHero = myArr[i];
  // console.log(superHero);
}

//keywords
//break and continue

for (let index = 1; index <= 20; index++) {
  if(index === 5){
    // console.log('5 is detected');
    break;
  }
  // console.log(`value of i is : ${index}`);
  
}
for (let index = 1; index <= 20; index++) {
  if(index === 5){
    // console.log('5 is detected');
    continue;
  }
  // console.log(`value of i is : ${index}`);
  
}

