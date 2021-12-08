/* 
	Task - 1.
	Implement the getMin(arr) function, which takes an array of numbers arr and returns the smallest number of the array. To solve the problem, 
	you must use one of the methods to specify the context of this. It is forbidden to use any cycles.
*/

function getMin(arr) {
	return Math.min.apply(null, arr)
}

console.log(getMin([12, 6, 22, 13, 7])); //6
console.log(getMin([8, 0, 11, 24, 14, 9])); //0
console.log(getMin([15, 26, 2, -3, 3, 33])); //-3
console.log(getMin([15, 0.26, 12, 8, 44, 22])); //0.26
console.log(getMin([12, -10, 32, 0.5, -77, 0, -44])); //-77
