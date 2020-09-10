
//Global variable:
var x=12;
console.log(x);

//IIFE Function: Immediately invoked function expression:
(function test(){
	let x=10;
    console.log(x);
}());

//IIFE Function: Immediately invoked function expression:
(function test2(){
	let x=50;
    console.log(x);
}());

//test();
//These do not affect outside variable if done right
console.log(x);
