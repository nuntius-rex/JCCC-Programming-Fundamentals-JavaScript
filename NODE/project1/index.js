

/*
Note: How to get the modules and run: 
To get the modules that are needed, run the command "npm install" in the command prompt of this folder.
To run this code, run the command "node index.js"
*/

const cities=require("cities");

var ZipInfo=cities.zip_lookup("66061");

console.log(ZipInfo);
