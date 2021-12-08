/*
	Task - 4.
	Implement the take() function that converts a sequence of iterated values into a sequence of length n.

	Example usage:
	const arr = ['a', 'b', 'c', 'd'];
	for (const x of take(2, arr)) {
	console.log(x);
	}
	// Output:
	// a
	// b
*/

function* take(n, iterable) {
	for (const x of iterable) {
		if (n <= 0) {
			break;
		}
		n--;
		yield x;
	}
}
