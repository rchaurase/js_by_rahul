function birthdayCakeCandles(candles) {
  // Write your code here
   let largestCandles = Math.max(...candles);
   let numberOfLargestCandles = [];
   for(let i = 0; i<candles.length; i++){
       if(largestCandles === candles[i]){
        numberOfLargestCandles.push(candles[i])
       }
   } 
  return numberOfLargestCandles.length;
}

let numberOfCandle = birthdayCakeCandles([2,3,4,5,5,5,3]);

console.log(numberOfCandle);