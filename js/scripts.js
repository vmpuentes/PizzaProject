//business logic
// function Customer (name,finalPrice) {
//   this.name = name;
//   this.finalPrice = finalPrice;
//}
function Pizza (pizzaSize) {
  this.toppings = [];//["Soychesse", "Brown-Rice-Flour", "Kale", "Tempei-Cubes", "Low-Sodium Tomato Sauce", "Tempei-Cubes", "Flax-Seed"];
  this.price = 10;
  this.pizzaSize = pizzaSize;//["Small", "Medium", "Large"]
}
//var pizzaSize = [];
//var toppingsSelected = [];

Pizza.prototype.calculatePizzaPrice = function() {
  if (this.pizzaSize === "Medium") {
  return (this.price + this.toppings.length * .5) + 5;
} else if (this.pizzaSize === "Large") {
  return (this.price + this.toppings.length * .5) + 10;
} else {
return (this.price + this.toppings.length * .5);
 }
}
//var orderedPizza = new Pizza(["toppings"],["size"]);


// function Pizza = orderPizza() {
//   $("form#calculate").val();
//   $("form-group.toppings");
// };
//User Interface logic
$(document).ready(function() {
  $("form#pizzaInput").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("#yourName").val();
    var pizzaSize = $("#size").val();
    var pizza = new Pizza(pizzaSize);
      $("input:checkbox[name=toppings]:checked").each(function() {
      var toppingsSelected = $(this).val();
      pizza.toppings.push(toppingsSelected);
    });
    var calculatePrice = pizza.calculatePizzaPrice();
    $("#customerName").append(inputtedName);
      $("#toppingsShown").append(pizza.toppings.toString());
        $("#pizzaSizeShown").append(pizzaSize);
          $("#pizzaPriceShown").append("$" + pizza.calculatePizzaPrice());
            $("#output").show();
          });
        });


    // $("button#calculate").append('<div class="form-group">' + '<label for="new-order"> Here is your Order</label>' + Pizza.calculatePizzaPrice() + '<output type="text" class="form-control">' + '</div>');
  });
  });
    //$("form-group#size").val();
    //var inputtedToppings = $("form-group#toppings");
    //var pizza = new Pizza();
    //var pizzaTopping = [];

    //       var selectSize = $(this).val();
    //$("#toppings:checkbox[name=toppings]:checked").val();
    //    var selectToppings = $(this).val();
    //  });
     //

      // $("button#calculate").append('<div class="form-group">' + '<label for="new-order"> Here is your Order</label>' + Pizza.calculatePizzaPrice() + '<output type="text" class="form-control">' + '</div>');
  //   });
  // });


// '<div class="form-group">' + '<label for="new-order">Here is your Order</label>' + pizza.calculatePizzaPrice() + '<output type="text" class="form-control">' + '</div>');
//
// var newToppings = $("input:checkbox[name=toppings]:checked").val();
//  var newSize = $("input:checkbox[name=size]:checked").val();
