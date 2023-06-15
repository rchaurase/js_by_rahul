var words = 'bottles';
count = 99;

while(count>0){
  console.log(count + " " + words +" " + "of the beer on the wall");
  
  console.log("take it one down , pass it around");

  count--;

  if (count>0) {
    console.log(count + " " + words +" " + "of the beer on the wall");
  }else{
    console.log("no more " + words + "of the beer on the wall");
  }
}
