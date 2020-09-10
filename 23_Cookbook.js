
/*
Requirements:

1) Make a Cookbook creator
2) Create a cookbook (object)
3) Function addRecipes
 - name (string)
 - addIngredients Function with push()
      ingredient (array)
 - addInstructions Function with push()
      instructions (array of steps)
*/

function Cookbook(name){
  this.name=name;
  this.recipes=[];
  this.addRecipes=function(name, ingredients, instructions){
    this.recipes.push({
      name:name,
      ingredients:ingredients,
      instructions:instructions
    })
  }
}

var DansCookbook=new Cookbook("Dan's Dessert Cookbook");

console.log(DansCookbook.name);

DansCookbook.addRecipes(
  "Brownies", //name
  [
    "½ cup butter",
    "1 cup white sugar",
    "2 large eggs eggs",
    "1 teaspoon vanilla extract",
    "⅓ cup unsweetened cocoa powder",
    "½ cup all-purpose flour",
    "¼ teaspoon salt",
    "¼ teaspoon baking powder"
  ], //ingredients
  [
    "Preheat oven to 350 degrees F (175 degrees C). Grease and flour an 8-inch square pan.",
    "In a large saucepan, melt 1/2 cup butter. Remove from heat, and stir in sugar, eggs, and 1 teaspoon vanilla. Beat in 1/3 cup cocoa, 1/2 cup flour, salt, and baking powder. Spread batter into prepared pan.",
    "Bake in preheated oven for 25 to 30 minutes. Do not overcook.",
    "To Make Frosting: Combine 3 tablespoons softened butter, 3 tablespoons cocoa, honey, 1 teaspoon vanilla extract, and 1 cup confectioners' sugar. Stir until smooth. Frost brownies while they are still warm."
  ] //instructions
);

DansCookbook.addRecipes(
  "Cookies", //name
  [
    "¾ cup brown sugar","½ cup unsalted butter, at room temperature","½ cup white sugar", "1 teaspoon salt","1 large egg", "1 teaspoon vanilla extract","1 ½ cups all-purpose flour","¾ teaspoon baking soda","1 cup milk chocolate chips","1 (3 ounce) bar dark chocolate, cut into chunks","3 tablespoons white chocolate chips"
  ], //ingredients
  [
    "Combine brown sugar, butter, white sugar, and salt in a large bowl; beat with an electric mixer until a creamy, deep brown mixture forms. Add egg and vanilla; beat until mixture lightens and becomes smooth, 10 to 15 seconds.","Mix flour and baking soda together in a separate bowl. Add slowly to the wet ingredients until mostly incorporated, but some white traces of flour remain. Fold in milk chocolate, dark chocolate, and white chocolate using a spatula, not the mixer. Cover the dough and refrigerate for at least 30 minutes, or up to 48 hours.","Preheat the oven to 350 degrees F (175 degrees C) when ready to bake.","Divide cold dough into 2 1/4-ounce portions and place on a cookie sheet.","Bake in the preheated oven until the edges start to look golden brown and crispy, 10 to 12 minutes. Do not overbake; the centers will not look fully done. Cool until cookies are set, about 30 minutes."
  ] //instructions
);

console.log(DansCookbook.recipes);
