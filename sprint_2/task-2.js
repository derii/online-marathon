/*
	Task - 2.
	The user enters as arguments the number of seconds, minutes, hours, days, weeks, months, years.
	Output how many seconds are in all this.
	All parameters are optional. Consider 30 days in a month

	Example:
	howMuchSec(12, 3); //192
	howMuchSec(1, 33, 22); //81181
	howMuchSec(); //0
*/

const howMuchSec = (...arr) => {
	let [seconds = 0, minutes = 0, hours = 0, days = 0, weeks = 0, months = 0, years = 0] = arr;
	return seconds + (minutes * 60) + (hours * 60 * 60) + (days * 24 * 60 * 60) + (weeks * 7 * 24 * 60 * 60) + (months * 30 * 24 * 60 * 60) + (years * 12 * 30 * 24 * 60 * 60);
}
console.log(howMuchSec(12, 3)); //192
console.log(howMuchSec(1, 33, 22)); //81181
console.log(howMuchSec()); //0
