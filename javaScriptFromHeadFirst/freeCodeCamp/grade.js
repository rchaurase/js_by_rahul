function getGrade(score) {
  let grade;
  // Write your code here
  for(let i = 0; i<score.length; i++){
      if(score[i]<= 30 || score[i]>25){
          return "A";
      }else if(score[i]<= 25 || score[i]>20){
          return "B";
      }else if(score[i]<= 20 || score[i]>15){
          return "C";
      }else if(score[i]<= 15 || score[i]>10){
          return "D"
      }else if(score[i]<= 10 || score[i]>5){
          return "E";
      }else if(score[i]<= 0 || score[i]>5){
          return "F";
     }
  
    }
}
let result = getGrade([23,33,7,11,22,8,10])
console.log(result);