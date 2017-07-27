//business logic
// function Customer (name,finalPrice) {
//   this.name = name;
//   this.finalPrice = finalPrice;
//}
function Pizza (toppings,price,pizzaSize) {
  this.toppings = toppings//["Soychesse", "Brown-Rice-Flour", "Kale", "Tempei-Cubes", "Low-Sodium Tomato Sauce", "Tempei-Cubes", "Flax-Seed"];
  this.price = 10;
  this.pizzaSize = pizzaSize;//["Small", "Medium", "Large"]
}
//var pizzaSize = [];
var toppingsSelected = [];


Pizza.prototype.calculatePizzaPrice = function() {
  if (this.pizzaSize === "medium") {
  return (this.price + $(Pizza).toppingsSelected * .5) + 5;
  } else if (this.pizzaSize === "large") {
  return (this.price + $(Pizza).toppingsSelected * .5) + 10;
} else {
return (this.price + toppings * .5);
 }
}
console.log("hello");
var orderedPizza = new Pizza(["toppings"],["size"]);


// function Pizza = orderPizza() {
//   $("form#calculate").val();
//   $("form-group.toppings");
// };
//User Interface logic
$(document).ready(function() {
  $("form#pizzaInput").submit(function(event) {
    event.preventDefault();
    //var pizzaSize = [];
    var pizzaTopping = [];
    var inputtedName = $("#yourName").text();

    // var pizza = new Pizza();

    var pizzaSize = $("#size").val();
    $('input:checkbox[name="toppings"]:checked').each(function() {
      var toppingsSelected = $(this.toppings).val();
      pizzaTopping.push(toppingsSelected);
    });
    console.log("hello");
    //       var selectSize = $(this).val();
    //$("#toppings:checkbox[name=toppings]:checked").val();
    //    var selectToppings = $(this).val();
    //  });
     //

      $("#result").append(inputtedName + "Your total is" + Pizza.calculatePizzaPrice);
    })
  }
}

// '<div class="form-group">' + '<label for="new-order">Here is your Order</label>' + pizza.calculatePizzaPrice() + '<output type="text" class="form-control">' + '</div>');
//
// var newToppings = $("input:checkbox[name=toppings]:checked").val();
//  var newSize = $("input:checkbox[name=size]:checked").val();
