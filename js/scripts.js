//business logic
function Customer (name,finalPrice) {
  this.name = name;
  this.finalPrice = finalPrice;
}
function Pizza (toppings,size) {
  this.toppings = toppings;
  this.price = 10;
  this.pizzaSize = size;
}

Pizza.prototype.calculatePizzaPrice = function() {
  if (this.pizzaSize === "medium") {
  return (this.price + this.toppings.length * .5) + 5;
  } else if (this.pizzaSize === "large") {
  return (this.price + this.toppings.length * .5) + 10;
} else {
return (this.price + this.toppings.length * .5);
 }
}
console.log("hello");
var pizza = new Pizza();

// function Pizza = orderPizza() {
//   $("form#calculate").val();
//   $("form-group.toppings");
// };
//User Interface logic
$(document).ready(function() {
  $("form#pizzaInput").submit(function(event) {
    event.preventDefault();
    var inputtedName = $("#yourName").text();

    // var pizza = new Pizza();

    var size = $("#size").val();
    //       var selectSize = $(this).val();

    var toppings = $("input:checkbox[name=toppings]:checked").val();
    //    var selectToppings = $(this).val();
    //  });
     //

      $("button#calculate").append("<li>" +  + "</li>");

  });
});
//
// var newToppings = $("input:checkbox[name=toppings]:checked").val();
//  var newSize = $("input:checkbox[name=size]:checked").val();
