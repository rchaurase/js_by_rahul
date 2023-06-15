function catAndMouse(x, y, z) {
  let catAPosition = Math.abs(z-x);
  let catBPosition = Math.abs(z-y);
  if(catAPosition>catBPosition){
     console.log("Cat B");
     
  }else if(catBPosition>catAPosition){
      console.log("Cat A");
   
  }else{
      console.log("Mouse C");
  }
  
}
 let result = catAndMouse(1,6,3);
 console.log(result);
