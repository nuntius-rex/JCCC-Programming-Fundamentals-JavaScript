
//While loop:
var num=0;
while(num<=16){
	  console.log(num);
		//num++;
		num=num+2;
}

//Do while:
do{
	var name=prompt("Who are you?");
}while(name != "Dan");

//For loop:
for(var i=0; i<=12; i++){
	console.log("i is now equal to: "+i);
}


for(var i=10; i>0; i--){
	console.log("The countdown is: "+i);
  	if(i==1){
    	console.log("Launch!");
    }
}


for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}


//Writing HTML:
var text="<h1>Test</h1>\n";
for(var i=0; i<10; i++){
  text+="<p>The value if i is: "+i+"</p>\n";
}
console.log(text);


//Writing HTML table:
var text="<table><tr><th>Heading</ht></tr> \n";

for(var i=0; i<10; i++){
  text+="<tr><td>The value if i is: "+i+"</td></tr>\n";
}
text+="</table>";

console.log(text);


//Arrays to HTML table:
var family=["Dan","Barb","Ashlyn","Nathan","Daniel" ];

var text="<table><tr><th>Family</ht></tr> \n";
for(var i=0; i<family.length; i++){
  text+="<tr><td>"+family[i]+"</td></tr>\n";
}
text+="</table>";

console.log(text);
