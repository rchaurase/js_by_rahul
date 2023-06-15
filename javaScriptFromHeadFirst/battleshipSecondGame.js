var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess ;
var hits = 0;
var numberOfGuesses = 0;
var isSunk = false;

const prompt = require("prompt-sync")({sigint:true})

while(isSunk == false){
  guess = prompt("hey Enter your value , (between 1 to 6) : ");
  if(guess < 1 || guess > 6){
     console.log("Please Enter Valid Guess Number ");
  }else{
        numberOfGuesses = numberOfGuesses+1;
  }
  if(guess == location1 || guess == location2 || guess == location3){
    hits == hits + 1;
  }
  if(hits == 3){
    isSunk = true;
    console.log("you sank the my battleship ");
  }

}

var stats = "You took " + numberOfGuesses + " guesses to sink the battleship, " +
"which means your shooting accuracy was " + (3/numberOfGuesses);

console.log(stats);