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
	let digitArray1 = [];
	let digitArray2 = [];
	for (let i = 0; i < arr1.length; i++) {
		if (isNumber(arr1[i])) {
			digitArray1 = digitArray1.concat(arr1[i]);
		}
	}
	for (let j = 0; j < arr2.length; j++) {
		if (isNumber(arr2[j])) {
			digitArray2 = digitArray2.concat(arr2[j]);
		}
	}
	return digitArray1.concat(digitArray2)
}
console.log(combineArray([12, 'User01»', 22, true, -8],
	['Index', 6, null, 15])); // [12, 22, -8, 6, 15]
