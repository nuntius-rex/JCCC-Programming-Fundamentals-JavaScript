
//Nested functions to create object type structure

//variablized anonymous function
var landscape = function(){

    var result="";
    var flat = function(size){
      for(count=0; count<size; count++){
          result+="_";
      }
    }
    var mountain = function(size){
      result+="/";
      for(count=0; count<size; count++){
          result+="^";
      }
      result+="\\";
    }

    flat(3);
    mountain(4);
    flat(6);
    mountain(1);
    flat(6);

    return result;

}

console.log( landscape() );
