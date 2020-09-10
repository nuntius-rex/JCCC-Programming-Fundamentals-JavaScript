
/*
Instructions: Square
########
########
########
########
########
########
########
########

loop 8 times
loop inside 8 times inside
add one hash mark each time.
*/

var square="";
for(var i=0; i<8; i++){
  for(var j=0; j<8; j++){
    square+="#";
  }
  console.log(square);
  square="";
}
