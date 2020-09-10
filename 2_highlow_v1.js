function getRandomNum(max){
	return Math.floor(Math.random() * Math.floor(max));
}

var defValue=getRandomNum(10);

var msg="HIGH-LOW: Guess a number between 1-10!";
var userGuess=Number(prompt(msg, 0));

console.log("You guessed: "+userGuess);

if(isNaN(userGuess)){
	console.log("Sorry, you did not enter a valid number!");
}else{
    //If it is a number, do this stuff.
    if(userGuess>defValue){
      console.log("Too high!");
    }
    if(userGuess<defValue){
      console.log("Too low!");
    }
    if(userGuess==defValue){
      console.log("Awesome! That's the number!");
    }

}
