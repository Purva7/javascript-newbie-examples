"use strict"

/*
** closures are functions with preserved data
*/
var addTo = function (passed) {
	
	var add = function(inner){
		return passed + inner;
	};
	return add;
};

console.dir( addTo );

addhundred = new addTo(100);

addonefifty = new addTo(150);

console.log( addhundred(1) );
console.log( addonefifty(1) );