var balance = 10500;
// var cameraOn = true;

function steal(balance , amount){
  //  cameraOn = false;
   if (balance > amount) {
    balance = balance-amount;
   }
   return amount;
  //  cameraOn = true;
}
var amount = steal(balance , 1250);

console.log("hey your amount is : " + amount);

console.log(balance);