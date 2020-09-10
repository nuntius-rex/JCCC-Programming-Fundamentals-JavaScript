//System stuff:
var gestures=["rock", "paper", "scissors"];
function getRandomNum(max){
	return Math.floor(Math.random() * Math.floor(max));
}

//User Input:
var userGesture = prompt("Choose rock, paper or scissors?", "");

//PC Input:
var pcGuess=getRandomNum(3);
var pcGesture=gestures[pcGuess];

console.log("PC gestured "+pcGesture+"!");
console.log("User gestured "+userGesture+"!");

//Scoring:
var p1=pcGuess;
var p2=gestures.indexOf(userGesture);
var score = (3+(p1-p2)) %3;

console.log(p1);
console.log(p2);

console.log("(3+("+p1+"-"+p2+")) %3 = "+score);

console.log(score);

switch(score){
  case 0:
    console.log("Tie!");
    break;
  case 1:
    console.log("Player 1 (PC) Wins!");
    break;
  case 2:
    console.log("Player 2 (User) Wins!");
    break;
}
