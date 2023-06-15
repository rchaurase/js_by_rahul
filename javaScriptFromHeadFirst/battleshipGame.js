var location1 = 3;
var location2 = 4;
var location3 = 5;
var guess ;
var hits = 0;
var numberOfGuesses = 0;
var isSunk = false;

const prompt = require("prompt-sync")({sigint:true})

while(!isSunk){

  guess = prompt("Enter your value : ");

  if(guess == location1 || guess == location2 || guess == location3){
    hits++;
    if(hits == 3){
      isSunk = true;
      console.log("you sank the battleship");
    }
  }else{
    console.log("please guess the right  number ");
    numberOfGuesses++;
  }
 console.log("hey you guess the number , " + hits + "number of times" + " You guess " +numberOfGuesses + "  times");  

}


