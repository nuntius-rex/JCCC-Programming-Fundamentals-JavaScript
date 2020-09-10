
var apples=[
  {
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
  },
  {
    hasSeeds:true,
    taste: "sweet",
    shape: "round",
    color: "green",
    cored: true,
    extras: ["carmel","peanut butter"],
    brand: "Granny Smith",
    drop: function(){
      return "thud!";
    },
    size:1,
    grow: function(){
      this.size=this.size+1;
      return "";
    }
  }
];

for(i=0;i<apples.length;i++){
  let appleNum=i+1;
  console.log("Apple #"+appleNum+" is a "+apples[i].brand+" type apple.");
}
