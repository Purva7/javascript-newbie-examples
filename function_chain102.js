"use strict"
/*
**  Function chaining
**  with closure
**
*/

var obj = function(){
	var i = 0;
	var add = function(j){
		i += j;
		return this;
	}	
	
	var subtract = function(j){
		i -= j;
		return this;
	};
	
	 var print = function(){
		console.log(i);
		return this;
	};
	
	return {add:add, subtract:subtract, print:print};
}

var y = obj();

y.add(5).subtract(2).print();
