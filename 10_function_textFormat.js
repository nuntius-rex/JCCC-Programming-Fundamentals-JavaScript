

function textFormat(text,task){
  	if(task=="U"){
	    return text.toUpperCase();
    }
	  if(task=="L"){
	    return text.toLowerCase();
    }
}

var text="In leberkas capicola tail culpa pork loin est short loin chislic do ground round elit ipsum. Pork belly rump officia ham";
var output = textFormat(text,"U");
console.log( output );
