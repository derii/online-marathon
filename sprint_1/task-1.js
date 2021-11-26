/* 
	Task - 1.
	Implement the getModifiedArray(array) function, which takes an arbitrary array, and returns an array with the value of the first element of the array equal to “Start”, the last element of the array equal to “End” and the rest of elements should be the same as in an initial array. The initial array should stay unchanged.
	
	Function example:
	getModifiedArray([12, 6, 22, 0, -8])); // [‘Start’, 6, 22, 0, ‘End’]
*/

function getModifiedArray(array) {
	let newArray = array.concat();
	newArray[0] = 'Start';
	newArray[newArray.length - 1] = 'End';
	return newArray;
}
console.log(getModifiedArray([12, 6, 22, 0, -8])); // [‘Start’, 6, 22, 0, ‘End’]
