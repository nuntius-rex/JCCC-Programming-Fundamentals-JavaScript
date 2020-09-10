
/*
Input:
 - Ask user: "rock, paper, or scissors?"
    - prompt()
 - Computer: "rock, paper, scissors" (randomly)
    - array of gestures that include rock, paper, scissors.
    - random number 0-2
    - set the computer gesture to rock, paper or scissor

Conditionals:
 - score: compare user gesture with computer gesture:
  > if same: tie
  > rock beats scissors
  > paper beats rock
  > scissors beats paper

Output:
  - Result of scoring
*/
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

console.log("PC guestured "+pcGesture+"!");
console.log("User guestured "+userGesture+"!");

//Scoring:
if(userGesture==pcGesture){
  console.log("Tie!");
}

if(userGesture=="rock"){
	if(pcGesture=="paper"){
		console.log("Paper wins!");
	}else{
  	console.log("Rock wins!");
  }
}

if(userGesture=="paper"){
	if(pcGesture=="scissors"){
		console.log("Scissors wins!");
	}else{
  	console.log("Paper wins!");
  }
}

if(userGesture=="scissors"){
    if(pcGesture=="rock"){
        console.log("Rock wins!");
    }else{
        console.log("Scissors wins!");
    }
}
