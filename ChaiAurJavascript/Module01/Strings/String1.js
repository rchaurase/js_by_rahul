const name = "Rahul "

const repoCount = 50;

console.log(name + repoCount + " value");

console.log(`Hello My name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('rahul-chs');

console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(2));
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.indexOf('s'));

const myNewString = gameName.substring(0,4);

console.log(myNewString);

const anotherString = gameName.slice(-8,4);

console.log(anotherString);

const newGameName = "   Rahul   "

console.log(newGameName);
console.log(newGameName.trim());

const url = "https://rhaulcontemplate.com/rahul%20contemplate"

console.log(url.replace("%20",'-'));

console.log(url.includes('sundar'));

console.log(gameName.split('-'))

console.log(gameName.anchor('hello '));

const sentence = "The quick brown fox jumps over the lazy dog."

let index = 5;

console.log(`using an index of ${index} the character returned is ${sentence.at(index)}`);
 index  = -4;

 console.log(`using an index of ${index} the character returned is ${sentence.at(index)}`);

 console.log(myNewString.big());

 console.log(myNewString.blink());

 console.log(myNewString.charCodeAt(3));

 console.log(myNewString.codePointAt(1));

 let icons = '❤️❤️💜💟⭐🍕😍'
 console.log(icons.codePointAt(9));

 





