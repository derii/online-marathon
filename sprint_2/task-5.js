/*
	Task - 5.
	Please, implement a function combineFunctions that takes any number of functions as an argument and returns a function that is a composition of the arguments.

	For example:
	negate = function(x){ return -x; };
	halve = function(x){ return x / 2; };
	square = function(x){ return x * x; };
	double = function(x){ return 2 * x; };
	combineFunctions(negate, halve, square) should return a function
	square(halve(negate(x)))


	combineFunctions(negate, double) should return a function
	double(negate(x)))
*/

const combineFunctions = (...functions) => {
	if (functions.length) return args => functions.reduce((arg, fn) => fn(arg), args);
	return x => x;
}

console.log(combineFunctions(x => x + 5)(3)); //8
console.log(combineFunctions()(3)); //3
console.log(combineFunctions(x => x + x, x => x - 1, x => x !== 0)(5)); //true
console.log(combineFunctions(x => x + x, x => x - 1, x => -x, x => 'Hello, ' + x)(5)); //Hello, -9
