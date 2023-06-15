var myObj = {
  gift:'pony',
  pet:'kitten',
  house: 'slytherine'
};
function checkObj(checkProp){
  if(myObj.hasOwnProperty(checkProp)){
  return myObj[checkProp];
}else{
  return "Not Found"
}
}

console.log(checkObj("pet"));