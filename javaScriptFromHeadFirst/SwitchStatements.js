function caseInSwitch(val){
  var answer = "";
  switch(val){
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamama";
      break;
    case 4:
      answer = "delta";
      break;
    default:
      answer = "No-Value";
      break;
  }
  return answer;

}

console.log(caseInSwitch(3));

// multiple-identical-option-in-switch

function sequentialSize(val){
  var answer = "";
  switch(val){

    case 1:
    case 2:
    case 3:
      answer ="Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;

  }
  return answer;
}

console.log(sequentialSize(7));
