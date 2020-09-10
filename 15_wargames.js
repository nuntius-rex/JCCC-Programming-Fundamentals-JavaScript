/*
REQUIREMENTS:
Input 1:
  - Ask user "Shall we play a game?"

Conditionals1:
  - if user says "Yes"

Input 2:
  - Ask user "What game would you like to play? [ game1,game2,game3 ] "

Conditionals2:
  - if user enters one of the games - make outcome
  - if user does not enter one of the game, display a default message

  hint: use Switch statement

Output:
  - display outcome
*/

var question=prompt("Shall we play a game?");
if(question=="no"){
	console.log("Maybe next time. Goodbye!");
}else if(question=="yes"){

    var game=prompt("Great! What game would you like to play? [ nuclear war, dice, jello-toss ]");

    switch(game){
      case "nuclear war":
        	console.log("Boom!");
        break;
	  case "dice":
        	var die=Math.floor(Math.random()*6);
        	console.log("you rolled a "+die );
        break;
      case "jello-toss":
      		console.log("Squishy squish!");
        break;
      default:
        	console.log("Sorry, I don't know that game!");
    }

}
