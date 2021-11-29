/*
	Task - 4.
	Implement the processArray(arr, factorial) function, which takes the first parameter of the array arr, and the second parameter the function 
  factorial and processes each element of the array arr with the function factorial, returning a new array (the source array arr does not change)
	The function factorial(n) calculates and returns the factorial of the number n. For example factorial(4) returns 24.

	Example: // determines the factorial of the number n
	function factorial(n) { // your code};
	processArray([1, 2, 3, 4, 5], factorial); // [1, 2, 6, 24, 120]
*/

// factorial with recursion
/*
function factorial(n) {
	if (n === 0 || n === 1) { return 1; }
	else { return n * factorial(n - 1); }
}
*/
function factorial(n) {
	let factorialArray = [];
	if (n == 0 || n == 1)
		return 1;
	if (factorialArray[n] > 0)
		return factorialArray[n];
	return factorialArray[n] = factorial(n - 1) * n;
}
function processArray(arr, factorial) {
	return arr.map(factorial)
}
console.log(processArray([1, 2, 3, 4, 5], factorial)); // [1, 2, 6, 24, 120]
