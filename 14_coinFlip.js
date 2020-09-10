
/*
Input:
  - Ask user "heads or tails?"

Conditionals:
  - Scoring:
  if user guesses what computer guesses - positive outcome
  if user does not guess what computer guesses - negative outcome ("Sorry!!!")

Output:
  - display outcome
*/
var coinSides=["heads","tails"];
function getRandomNum(max){
	return Math.floor(Math.random() * Math.floor(max));
}
var pcNum=getRandomNum(2);
var pcChoice=coinSides[pcNum];

var userChoice=prompt("Heads or Tails?");

console.log("You guessed: "+userChoice );

if(userChoice==pcChoice){
	console.log("Good guess! It was "+pcChoice );
}else{
	console.log("Sorry! It was "+ pcChoice);
}

//=================================
// Validation Version #1
//=================================
var coinSides=["heads","tails"];
function getRandomNum(max){
	return Math.floor(Math.random() * Math.floor(max));
}
var pcNum=getRandomNum(2);
var pcChoice=coinSides[pcNum];

var userChoice=prompt("Heads or Tails?");

var validUserChoice=coinSides.indexOf(userChoice);
console.log(validUserChoice);

if(validUserChoice==-1){
	console.log("Invalid input!");
}else{
    console.log("You guessed: "+userChoice );

    if(userChoice==pcChoice){
        console.log("Good guess! It was "+pcChoice );
    }else{
        console.log("Sorry! It was "+ pcChoice);
    }

}



//=================================
// Validation Version #2
// with user assistance:
//=================================

var coinSides=["heads","tails"];
function getRandomNum(max){
	return Math.floor(Math.random() * Math.floor(max));
}
var pcNum=getRandomNum(2);
var pcChoice=coinSides[pcNum];

var userChoice=prompt("Heads or Tails?");
userChoice=userChoice.toLowerCase(); //user assistance (entries to lowercase)

var validUserChoice=coinSides.indexOf(userChoice);
console.log(validUserChoice);

if(validUserChoice==-1){
	console.log("Invalid input!");
}else{
    console.log("You guessed: "+userChoice );

    if(userChoice==pcChoice){
        console.log("Good guess! It was "+pcChoice );
    }else{
        console.log("Sorry! It was "+ pcChoice);
    }
}
