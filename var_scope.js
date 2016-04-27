"use strict"

/*
** safe use of variables
** first USE Strict
** lexical scoping - inside inside inside....
** not available outside - but avaialble all inside
** var -- itself does not provide block scope
** difference between let and var
** change all the lets to var - and you will
** i retaining the last assigned value to end
*/
k = 1;
console.log(k);

const jl = 3;

{function(){
	var i =1;
	if (true){
		var i = 2; // same variable
		console.log(i);
	}
	console.log(i);
}){};