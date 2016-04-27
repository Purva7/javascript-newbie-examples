"use strict"
/*
** while javascript does not have classes
** you can have public and private variables
** and public and private methods too
** dough is a private variable here
** however it can be get and set using a public method
** function - takes the place of classes and objects in javascript 
** and provides similar functionality
*/
var Pizza = function (){
	this.crust = 'thick';
  this.toppings = 3;
  this.hasBacon = false;
  
  var dough = 'wheat';
  this.getCrust = function(){
  	return this.crust;
  }
  this.getDough = function(){
  	return dough;
  }
  this.setDough = function(newDough){
  	dough = newDough;
  }
}

var pizzaA = new Pizza();

console.log(pizzaA.getCrust());
console.log(pizzaA.getDough());
pizzaA.setDough('rice');
console.log(pizzaA.getDough());