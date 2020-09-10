var appleObj={
  hasSeeds:true,
  taste: "sweet",
  shape: "round",
  color: "red",
  cored: true,
  extras: ["carmel","peanut butter"],
  brand: "Red Delicious",
  drop: function(){
    return "thud!";
  },
  size:1,
  grow: function(){
    this.size=this.size+1;
    return "";
  }
}

console.log("The shape of the apple is "+appleObj.shape+".");
console.log(appleObj.size);
console.log(appleObj.grow());
console.log(appleObj.size);
