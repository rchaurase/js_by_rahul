// function doIt(param){
//   param = 2;
// }

// test = 1;

// doIt(test);

// console.log(test);

// console.log(doIt(test));

// function knowYourFunction(){
//     console.log("you are great man");
// }

// knowYourFunction(8);

function bake(degrees){
    var message ;
    if(degrees > 700){
      message = "i am not a neclear reactor ";
    }else if(degrees < 100){
      message = "i am not a refrigerator";
    }else{
      message = "okay now it is very comfortable temparature for me ";
      // setMode("bake");
      // setTemp(degrees);
    }
    return message;
}
 
  var Status = bake(250);
  console.log(Status);

  function calculateArea(r){
      var area;
      if(r <= 0){
        return 0;
      }else{
        area = Math.PI * r*r;
        return area;
      }

  }

// var redius = 5.2;

// var theArea  = calculateArea(redius);
// console.log("the area is :" + Math.floor(theArea));

// var points = 0;
// function playTurn(player, location) {
//    points = 0;
//       if (location == 1) {
//          points = points + 100;
//       }
//        return points;
// }
// var total = playTurn("Jai", 1);
// console.log(total);

// console.log(points);

var redius = 5;
var yourArea = calculateArea(redius);
console.log(yourArea);

function calculateArea(r){
  var area = Math.floor(Math.PI * r*r);
  return area; 
}