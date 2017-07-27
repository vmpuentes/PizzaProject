//business logic

function Pizza (toppings,size) {
  this.toppings = [];
  this.price = 10;
  this.pizzaSize = size;
}

Pizza.prototype.calculatePizzaPrice = function() {
  if (this.pizzaSize === "medium") {
  return (this.price * this.quantity + this.toppings.length) + 5;
  } else if (this.pizzaSize === "large") {
  return (this.price * this.quantity + this.toppings.length) + 10;
} else {
return (this.price * this.quantity + this.toppings.length);
}

function Pizza = orderPizza() {
  $("form#calculate").val();
  $("form-group.toppings");
};
//User Interface logic
$(document).ready(function() {
  $("form#pizzaInput").submit(function(event) {
    event.preventDefault();
    console.log("hello")
    var pizza = new Pizza();
     var newToppings = $("input:checkbox[name=toppings]:checked").val();     
      $("input:checkbox[name=size]:checked").val();
        $("button#calculate").append();

  });
});
