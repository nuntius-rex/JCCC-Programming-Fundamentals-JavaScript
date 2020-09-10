
var heartArray=[
  [" ","#","#"," ","#","#"," "],
  ["#","#","#","#","#","#","#"],
  [" ","#","#","#","#","#"," "],
  [" "," ","#","#","#"," "," "],
  [" "," "," ","#"," "," "," "],
];

for(i=0;heartArray.length;i++){
  var output="";
  for(j=0;j<heartArray[i].length;j++){
    output+=heartArray[i][j];
  }
  console.log(output);
}
