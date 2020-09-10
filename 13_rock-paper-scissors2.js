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


//==============================
//Nested if example:
//==============================

//Scoring:
if(userGesture==pcGesture){
  console.log("Tie!");
}else{
    //If not a tie, score it!
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
}
