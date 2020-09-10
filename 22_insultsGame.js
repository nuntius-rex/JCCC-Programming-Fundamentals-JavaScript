
/*

requirements:

1) create a character creator function

  function functionName(){

  }

2) create array of silly insults

    {
      insults:[],
      insult:function(){
        console.log("output a random insult")
      }
    }

3) run creation of characters

    var Player1= functionName()

4) trigger the character insults

    Player1.insult()
    Player2.insult()

*/

var death_id=(Math.random() <=0.5)?1:2;

function Character(id, name){
  this.id=id;
  this.name=name;
  this.insults=[
    "Your mother smells of elderberry!",
    "Your father was a drunken seafaring barnicle!",
    "Thou art a wretched flopdoodle!",
    "Thou cockered sheep-biting incontinent varlet!",
    "Thou pragging shag-haired miscreant!",
    "Thou traitorous pox-marked foot-licker!",
    "May your nostrils consume the stench of death and fowl cheese!",
    "Thou art a crooked nosed nave!",
    "Die you horrendous sot!",
    "Thou slanderous weather-bitten miscreant!",
    "Thou degenerate pox-marked pigeon-egg!",
    "Thou artless earth-vexing mangy-dog!",
    "Thou withered fat-kidneyed dewberry!"
  ];
  this.insult=function(){
    let ranNum=Math.floor(Math.random()*this.insults.length);
    return this.insults[ranNum];
  }

  this.swordSounds=["Shing!", "Crung!", "Parang!", "Pareen!","Clang!", "Shashing!", "Tong!", "Doing!"];
  this.fight=function(){
    let ranNum=Math.floor(Math.random()*this.swordSounds.length);
    return this.swordSounds[ranNum];
  }

  this.dyingWords=[
    "Alas, I fear your ugly face more than death!",
    "It's just a flesh wound!",
    "I might have hit you better hadn't I!",
    "What's wrong with your face, you act as if you've won! Pfft!",
    "Surely, you will be haunted by my obnoxious ghost!"
  ];

  this.die=function(){
    let ranNum=Math.floor(Math.random()*this.dyingWords.length);
    if(this.id==death_id){
      return "\""+this.dyingWords[ranNum]+",\" said "+this.name+", as he died!";
    }else{
      return "";
    }

  }

}

var Player1=new Character(1,"White Knight!");
var Player2=new Character(2, "Dark Paletine!");

console.log(Player1.name+ " says: "+Player1.insult());
console.log(Player2.name+ " says: "+Player2.insult());
console.log(Player1.fight());
console.log(Player2.fight());
console.log(Player1.fight());
console.log(Player2.fight());
console.log(Player1.fight());
console.log(Player2.fight());
console.log(Player1.die());
console.log(Player2.die());
