//business logic

function Pizza (quantity,size) {
  this.toppings = [];
  this.price = 10;
  this.pizzaSize = size;
  this.quantity = quantity;
}

Pizza.prototype.calculatePizzaPrice = function() {
  if (this.pizzaSize === "medium") {
  return (this.price * this.quantity + this.toppings.length) + 5;
  } else if (this.pizzaSize === "large") {
  return (this.price * this.quantity + this.toppings.length) + 10;
} else {
return (this.price * this.quantity + this.toppings.length);
}

function Pizza.orderPizza();
//User Interface logic
$(document).ready(function() {
  $("form#calcualte").click(function(event) {
    event.preventDefault();
    console.log("hello")
    var pizza = new Pizza();
  });
});

["soycheese", "brown rice flour", "kale","tempei cubes"."low-sodium tomato sauce","flax seed"]
