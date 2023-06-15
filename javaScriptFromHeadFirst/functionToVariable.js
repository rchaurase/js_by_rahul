const Game = () =>{
  console.log("FootBall is much better than Baseball");
}
Game();

//Arrow function

function greeting(name){
 console.log(`Hello , $(name)`);
}

function processUserInput(callback){
  const name = prompt("please Enter your name : ");
  callback(name);
}

processUserInput(greeting);