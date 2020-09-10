
//Strings as Arrays:
var str="some text";
console.log(str.length);
console.log(str[3]);

//csv (comma separated values):
// First, Last, Title, Company
// Dan, Guinn, Instructor, JCCC

var str="Dan,Guinn,Instructor,JCCC";
console.log( str.split(",") );

var recArray=str.split(",");
console.log( recArray );


//loop over an array:
var recArray=["Dan","Guinn","Instructor","JCCC"];
for( let i=0;i<recArray.length;i++){
    console.log( recArray[i] );
}

//loop backwards over an array:
var recArray=["Dan","Guinn","Instructor","JCCC"];
for( let i=recArray.length-1;i>=0;i--){
    console.log( recArray[i] );
}


//foreach:
var recArray=["Dan","Guinn","Instructor","JCCC"];
recArray.forEach(function(item, index){
  console.log( index, item  );
});

//Foreach with outside function:
var recArray=["Dan","Guinn","Instructor","JCCC"];
recArray.forEach(logIt);

function logIt(element){
  console.log(element);
}

//Filter: with outside function
//Note: filter returns an array.
var recArray=["Dan","Guinn","Instructor","JCCC"];
var elem=recArray.filter(filterFunction)

function filterFunction(element){
  if(element=="Dan"){
    return element;
  }
}
console.log(elem);

//MAP:
var numbers=[4, 9, 16, 25];
var newNumbers=numbers.map(addOne);
console.log(numbers);
console.log(newNumbers);

function addOne(num){
  return num+1;
}

//REDUCE:
var myGrades=[93,95,88,0,55,91];
var average=0;
var total=myGrades.reduce(function(accumulator, item){
  return accumulator+item;
});
average=total/myGrades.length;

console.log(total);
console.log(average);







// Setting Arrays:

//1) Set at declaration:
var recArray=["Dan","Guinn","Instructor","JCCC"];

//2) Set separately:
var recArray=[];
recArray[0]="Dan";
recArray[1]="Guinn";
console.log(recArray);

//3) Pushing items onto array:
var recArray=[];
recArray.push("Dan");
recArray.push("Guinn");
console.log(recArray);

//Search:
var recArray=["Dan","Guinn","Instructor","JCCC"];
var searchVal=prompt("Enter your search:");
var searchResult=recArray.indexOf(searchVal);

if(searchResult==-1){
  console.log("Sorry, I couldn't find that!");
}else{
  console.log("I found "+searchVal+" at position "+searchResult+" in the array.");
}

//FIX THIS ONE DAN!!!!
//HOW TO MAKE CASE INSENSIVE:
var recArray=["Dan","Guinn","Instructor","JCCC"];
var searchVal=prompt("Enter your search:");
searchVal=searchVal.toLowerCase();
console.log(searchVal);

//var searchResult=recArray.indexOf(searchVal);
var searchResult=recArray.filter(function(item){
	if(item.toLowerCase().indexOf(searchVal) !=-1 ){
    	return item;
    }
});
console.log(item);

if(searchResult==-1){
  console.log("Sorry, I couldn't find that!");
}else{
  console.log("I found "+searchVal+" at position "+searchResult+" in the array.");
}


////=========================================================
var recArray=["Dan","Guinn","Instructor","JCCC"];
var searchVal=prompt("Enter your search:");
searchVal=searchVal.toLowerCase();
console.log(searchVal);

var searchResult=0;
for(i=0;i<recArray.length;i++){
	if(recArray[i].toLowerCase()==searchVal){
    	searchResult=i;
      	break;
    }
}

if(searchResult==-1){
  console.log("Sorry, I couldn't find that!");
}else{
  console.log("I found "+searchVal+" at position "+searchResult+" in the array.");
}
