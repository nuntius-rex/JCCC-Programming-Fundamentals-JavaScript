
/*
requirements:

1) Create inventory setter
 - name, price
 - optional: description

2) Inventory getter

3) Order setter
 - prompt user for how many items
 - loop prompt to enter the item by name

4) Get Total

*/
var inventory=[];
var order=[];

function setInventory(name, price, desc){
    inventory.push({
      name:name,
      price:price,
      desc: desc
    })
}

function getInventory(name){
  let result=inventory.filter(function(item){
      let nameLower=name.toLowerCase();
      if(item.name.toLowerCase().indexOf(nameLower) !=-1 ){
        return item;
      }
  });
  return result;
}

function setOrder(item){
  itemResult=getInventory(item);
  order.push(itemResult[0]);
}

function getTotal(order){
  var total=0;
  for(i=0;i<order.length;i++){
    total=total+order[i].price;
  }
  let priceFormat="$"+Number.parseFloat(total).toFixed(2);
  return priceFormat;
}

setInventory("Milk",2.50,"A white liquid made by cows.");
setInventory("Cookies",2.50,"A round baked good that will enhance happiness.");
setInventory("Cheese",2.50,"It's orange, and made by the government... sometimes.");
setInventory("Coffee",2.50,"A drink that makes you wake up over and over.");
setInventory("Jalapeno Chips",2.50,"Hot and crunchy!!!");

console.log(inventory);

setOrder("Milk");
setOrder("Chips");
setOrder("Cheese");

console.log(order);

var total=getTotal(order);

console.log(total);



/*
[
  {
  name:	"Milk"
  price:	"2.50"
  desc:	"A white liquid made by cows."
  },
  {
  name:	"Jalapeno Chips"
  price:	"2.50"
  desc:	"Hot and crunchy!!!"
  },
  {
  name:	"Cheese"
  price:	"2.50"
  desc:	"It's orange, and made by the government... sometimes."
  }
]
*/
