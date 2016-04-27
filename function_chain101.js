"use strict"
/*
**  Function chaining
**
*/

var obj = function(){
	this.i = 0;
	this.add = function(i){
		this.i += i;
	}	
	
	this.subtract = function(i){
		this.i -= i;
	};
	
	this.print = function(){
		console.log(this.i);
	}
}

var x = new obj();

x.add(5);
x.subtract(2);
x.print();
