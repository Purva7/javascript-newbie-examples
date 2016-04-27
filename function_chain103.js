"use strict"
/*
**  Function chaining
**  with public methods
** and properties
**
*/

var obj = function(){
	this.i = 0;
	this.add = function(j){
		this.i += j;
		return this;
	}	
	
	this.subtract = function(j){
		this.i -= j;
		return this;
	};
	
	 this.print = function(){
		console.log(this.i);
		return this;
	};
}

var y = new obj();

y.add(5).subtract(2).print();
