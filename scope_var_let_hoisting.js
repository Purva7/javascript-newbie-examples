
/*
** sample scope var and let difference
** hoisting -
*/


var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}
console.log( "result is " + multiply(4,5));
var mult = function(num1, num2){
	return (num1 * num2);
}
console.log("result of mult is " + mult(5,6));
document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

/**
 * Example 1
 */
console.log(x === undefined); // logs "true"
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = "my value";
 
(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();



function do_anything() {
  console.log(foo); // get away with a undefined.
  var foo = 2;
}
do_anything();

function do_something() {
  console.log(foo); // ReferenceError - let scope different from var
  let foo = 2;
}
do_something();