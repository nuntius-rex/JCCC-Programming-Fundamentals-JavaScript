
var phoneBook=[];

function setPhoneBook(first_name,last_name,phone){
  phoneBook.push(
    {
    'first_name': first_name,
    'last_name': last_name,
    'phone': phone,
    }
  )
}

var first_name=prompt("Enter a first name");
var last_name=prompt("Enter a last name");
var phone=prompt("Enter a phone number");

setPhoneBook("Dan","Guinn","123-456-7890");
setPhoneBook("Barb","Guinn","123-456-7890");
setPhoneBook("Nathan","Guinn","123-456-7890");
setPhoneBook("Ashlyn","Guinn","123-456-7890");
setPhoneBook("Daniel","Guinn","123-456-7890");

setPhoneBook(first_name,last_name,phone);
console.log("Full phone book:");
console.log( phoneBook );


var search=prompt("Search: Enter a name");

var result=phoneBook.filter(function(item){
    sArray=search.split(" ");
    if(
        item.first_name==search ||
        item.last_name==search ||
        (item.first_name==sArray[0] && item.last_name==sArray[1])
    ){
      return item;
    }
});
console.log("Search results:");
console.log(result);
