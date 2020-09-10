
/*
WARNING: NEVER USE FRONT-END JAVASCRIPT FOR PASSWORD AUTHENTICATION
THIS IS A SERVER-SIDE PROCESS ONLY. THIS IS ONLY AN EXERCISE:

1) Ask the user to enter their password
2) Have the password already set
3) Confirm the password
*/

var user={
  name:"Dan Guinn",
  membership: "Gold Member"
}

var password="123abc";
var userPass=prompt("Please enter your password");

if(userPass==password){
  console.log("Welcome "+user.name+"! "+user.membership );
}else{
  console.log("Sorry, your password is incorrect!");
}
