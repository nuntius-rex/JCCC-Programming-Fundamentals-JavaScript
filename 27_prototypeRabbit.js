
/*
Prototye allows you to extend and object by modifying
it's construction without affect the original code.
In other words, you are modifying the instance of the
object. Thereafter, all new objects inheret from this prototype.
*/


function Rabbit(type){
  this.type=type;
}

var killerRabbit = new Rabbit("killer");
var redRabbit = new Rabbit("red");

console.log(killerRabbit.type);
console.log(redRabbit.type);

Rabbit.prototype.teeth="small";
console.log(killerRabbit.teeth);
console.log(redRabbit.teeth);

//1.) Modify the prototype of all Rabbits to include a dance.
//2.) Make the dance a function that outputs the Rabbit type that dances.
//  TYPE ... rabbit dances a jig.
Rabbit.prototype.dance=function(){
  console.log("The "+this.type+" rabbit dances a jig.");
};
killerRabbit.dance();
redRabbit.dance();

/*
Dog Requirements:
1.) Make a dog with name and species
2.) Modify the prototye dog to have a description that describes (outputs) it's name and species.
*/

function Dog(name, species){
  this.name=name;
  this.species=species;
}

var pet1= new Dog("Bear","Collie");
Dog.prototype.describe=function(){
  console.log("My dog, "+this.name+", is a "+this.species+"!");
}
