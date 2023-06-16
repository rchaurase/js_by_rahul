
// First control flow is IF
const isUserLoggedIn = true
if(isUserLoggedIn){
   console.log('yes user is logged in')
}

let temperature = 42;

if(temperature === 40){
    console.log('temperature is less than 40')
}else{
  console.log('temperature is greater than 40');
}

console.log('Executed');

const score = 200;

if(score>100){
  const power = 'fly'
  console.log(`user power: ${power}`);
}

console.log(`User power : ${power}`);

const balance = 1000;

if(balance>500) console.log('test'),console.log('test2');

if(balance < 500){
    console.log('less than');
}else if(balance < 750){
  console.log('less than 750');
}else if(balance < 900){
  console.log('less than 900');
}else{
  console.log('less than 1200');
}

const userLoggedIn = true;
const loggedInFromGoogle = false;
const debitCard = true
const loggedInFromEmail = true;
if(userLoggedIn && debitCard ){
  console.log('Allow user to buy');
}

if(loggedInFromEmail || loggedInFromEmail){
  console.log('User logged in');
}





