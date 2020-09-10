
/*

1) Ask the user what's you favorite color?
2) Test if the color is what the system's favorite color is.
3) Output a message
*/


//=================================
//Simple, without an array:
//=================================
var yourColor=prompt("What is your favorite color?").toLowerCase();
var sysColor="blue";

if(yourColor==sysColor){
  console.log("That's cool! My favorite color is "+sysColor+" also!");
}else{
  console.log("Bummer, I don't like that color as much. My favorite is "
  +sysColor+".");
}


//=================================
//Simple, without an array:
//=================================
var colorArray=["red","green","yellow","blue"];
var userColor=prompt("What is your favorite color?").toLowerCase();
var randNum=getRandomNum(colorArray.length);
var sysColor=colorArray[randNum];

if(userColor==sysColor){
    console.log("That's cool! My favorite color is "+sysColor+" also!");
}else{
    console.log("Bummer, I don't like that color as much. My favorite is "
    +sysColor+".");
}

function getRandomNum(max){
	return Math.floor(Math.random() * Math.floor(max));
}


//===================================
//Alternate: Bug them with questions
//===================================
var colorArray=["red","green","yellow","blue"];
for(i=0;i<colorArray.length;i++){
  var userColor=confirm("What's your favorite color? is it "+colorArray[i]+" ?");
  if(userColor==true){
    alert("Yeah, I guessed it!");
    break;
  }
}
