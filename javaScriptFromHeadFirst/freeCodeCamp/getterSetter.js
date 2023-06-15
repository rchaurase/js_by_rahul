// Only change code below this line
class Thermostat{
  constructor(C){
       this.C = (5/9 * (C-32))
  }
  //getter
  get temperature(){//C = 5/9 * (F - 32)
    return this.C;
  } 
  set temperature(updateC){
       return this.C = updateC
  }
}

// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
console.log(temp);
thermos.temperature = 26;
temp = thermos.temperature; // 26 in 

console.log(temp);