function hurdleRace(k, height) {
  // Write your code here
  let highestHurdlle = Math.max(...height)
  if(highestHurdlle > k){
      return (highestHurdlle - k)
  }else{
      return 0;
  }

}

let result = hurdleRace(4,[1, 6, 3, 5, 2]);
console.log(result);