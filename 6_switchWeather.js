
var askWeather=prompt("What is the weather like?");
var user="Dan";
switch (askWeather) {
  case "rainy":
    console.log("Remember your umbrella!");
  break;
  case "sunny":
    console.log("Dress lightly... drink water!");
  break;
  case "cloudy":
    console.log("Take a nap!");
  break;
  default:
    console.log(`I'm sorry ${user}, I don't know that weather type!`);
}
