/*
	Task - 3.
	Find the maximum interval between two consecutive numbers. Numbers are entered as arguments

	Example:
	maxInterv(3, 5, 2, 7); //5
	maxInterv(3, 5, 2, 7, 11, 0, -2); //11
	maxInterv(3, 5); //2
	maxInterv(3); //0
*/

const maxInterv = (...maxIntervArray) => {
	let maxIntervResult = Math.abs(maxIntervArray[1] - maxIntervArray[0]);
	for (let i = 0; i < maxIntervArray.length; i++) {
		if (Math.abs(maxIntervArray[i + 1] - maxIntervArray[i]) > maxIntervResult) {
			maxIntervResult = Math.abs(maxIntervArray[i + 1] - maxIntervArray[i])
		}
	}
	if (maxIntervArray.length <= 1) {
		return maxIntervArray = 0
	}
	return maxIntervResult;
}

console.log(maxInterv(3, 5, 2, 7)); //5
console.log(maxInterv(3, 5, 2, 7, 11, 0, -2)); //11
console.log(maxInterv(3, 5)); //2
console.log(maxInterv(3)); //0
console.log(maxInterv(3, 5, 2, 8)); //6
console.log(maxInterv(3, 5, 2, 37, 11, 0, -2)); //35
console.log(maxInterv(8)); //0
