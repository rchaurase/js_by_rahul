function makePharses(){
  var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
  var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
  var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

  var random1 = Math.floor(Math.random()* words1.length);
  var random2 = Math.floor(Math.random()* words2.length);
  var random3 = Math.floor(Math.random()* words3.length);

  var phrase = words1[random1] + " " + words2[random2] + " " + words3[random3];

  console.log(phrase);
}
var i = 0
while(i < 10){
  makePharses();
  i++;
}



