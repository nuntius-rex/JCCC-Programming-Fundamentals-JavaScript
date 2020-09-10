/*
Instructions: Chessboard
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #

loop 8 times
loop inside 8 times inside
add one hash mark on odd each time the space alternating.
next line add one hash mark on even each time the space alternating.
*/

//Dan's version:
var board="";
var offset=0;
for(var i=0; i<8; i++){
  for(var j=0; j<8; j++){
    if(j%2==offset){
      board+="#";
    }else{
      board+=" ";
    }
   }
    if(offset==0){
      offset=1;
    }else{
      offset=0;
    }

  console.log(board);
  board="";
}

//Book Version:
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
