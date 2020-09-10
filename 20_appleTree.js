
var appleBasket=[];

function appleTree(hasSeeds, taste, shape, color, cored, extras, brand){

  appleBasket.push({
    hasSeeds:hasSeeds,
    taste: taste,
    shape: shape,
    color: color,
    cored: cored,
    extras: extras,
    brand: brand
  });

}

appleTree(true, "sweet", "round","red",true,["peanut butter","carmel"],"Red Delicious");
appleTree(false, "sour", "round","green",true,["peanut butter","carmel"],"Granny Smith");

//console.log(appleBasket);

var output="";

for(i=0;i<appleBasket.length;i++){

    if(appleBasket[i].hasSeeds){
      var hasSeeds="Unfortunately, they have seeds!";
    }else{
      var hasSeeds="Fortunately, they don't have seeds!";
    }

    output+="I love "+appleBasket[i].brand+" apples, \n"
    +"they taste so "+appleBasket[i].taste+" and are \n"
    +"nice and "+appleBasket[i].color+". "
    +hasSeeds+" \n\n";
}

console.log(output);
