var mystr = "Firstline\nSecondlne\nThirdLine";

console.log(mystr);

var ourStr = "I caame first. "

ourStr +=   " I come second. "

console.log(ourStr);

var myStr = "This is the start. " + ourStr

var lenghtOfMyStr = myStr.length - 1;

console.log(myStr);

console.log(lenghtOfMyStr);

// Bracket notation to find last Character in String.

var firstName = "Arya"
var lastLetterOfFirstName = firstName[firstName.length -1];

var lastName = "Lovelace";

var lastLetterOfLastName = lastName[lastName.length - 1];

console.log(lastLetterOfFirstName); 

console.log(lastLetterOfLastName);

// Bracket notation to find nth-to-last Character in String 

var lastLetterOfFirstName = firstName[firstName.length -3];
console.log(lastLetterOfFirstName); 


var lastLetterOfLastName = lastName[lastName.length - 2];
console.log(lastLetterOfLastName);

