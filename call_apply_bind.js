"use strict"

/*
**  Demo of call, apply and bind
*/
var obj = {num:2};
var obj2 = {num:5};

var addToThis = function(a){
	return this.num +a;
};

console.log(addToThis.call(obj, 3));

var addToToThis = function(a,b,c){
	return this.num +a + b + c;
};

console.log(addToToThis.call(obj, 1,2,3));

csonole.log("showing apply...");
var arr = [1,2,3];
console.log( addToToThis.apply(obj,arr));
console.log( addToToThis.apply(obj2,arr));
