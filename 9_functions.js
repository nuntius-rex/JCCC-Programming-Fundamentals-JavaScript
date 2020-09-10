
//Basic function:
function test(){
  //Do something
  console.log("This is a test!");
}
test();

//EXAMPLE:
console.log("first");
var par="test";

function test(par){
  //Do something
  console.log("This is a "+par+"!");
}

test(par);
test("joke!");

//Example 2:
function hammer(hammerObject){
  //Do something
  console.log("I am hammering a "+hammerObject+"!");
}
hammer("nail");

//VARIABLE NOTATION FUNCTION:
var test=function(msg){
  console.log("This is a function"+msg);
}

//Example 2:
var hammerObj="nail";
var hammer=function(hammerObj){
  console.log("I am hammering a "+hammerObj);
}
hammer();
