/*
	Task - 2.
	Write a function combineArray(arr1, arr2), which takes 2 arrays, and returns a new array consisting only of numeric elements of arrays arr1 and arr2.

	Function example:
	combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]));  // [12, 22, -8, 6, 15]
*/

function isNumber(n) {
	return Number(n) === n;
}
function combineArray(arr1, arr2) {
	let digitArray1 = arr1.filter((arr1) => isNumber(arr1));
	let digitArray2 = arr2.filter((arr2) => isNumber(arr2));
	return digitArray1.concat(digitArray2)
}
console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15])); // [12, 22, -8, 6, 15]
