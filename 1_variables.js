
//Single Line Comment

/*
Multi-Line
comment
*/

var ten=10;
console.log(ten+ten);

var ten=10;
console.log("The value is: "+(ten+ten));


var mood="happy";
mood="sad";
console.log("I am very "+mood);

var mood="happy";
//mood="sad";
console.log("I am very "+mood+"!");

//Getting user input #1:
var confirm=confirm("Do you want to self destruct?");
//console.log(confirm);
if(confirm==true){
  console.log("Boom!");
}else{
  console.log("Whew!");
}

//Getting user input #2:
var question="What do you want?";
var default_msg="Put your answer here!";

var prompt=prompt(question, default_msg);
console.log("I want "+prompt);

//PARTS OF A PROGRAM
/*
1) Input - Taking info from the user or other system
2) Evaluation (Conditional Logic) - Test to determine what to do
3) Ouput - Display info back to the user
*/
