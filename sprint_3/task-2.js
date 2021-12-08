/*
	Task - 2.
	Write a mapCreator(keys, values) function that takes two arrays of equal length. Using these arrays, the function must create an object of type Map,
	the keys of which are the values from the first array keys, and the values of Map - the values from the second array values. Moreover, the values of the
	map elements can be only string values. The function returns this Map object.

	Usage example:
	const map = mapCreator([1, 2, 3, 4, 5, 6, 7],["Lviv", "Rivne", "Kyiv", "Dnipro", "Kharkiv", "Chernivtsi", "Ivano-Frankivsk"]);
	map.size;  // 7
	map.get(1); // Lviv

	const map2 = mapCreator([1, 2, 3, 4, 5, 6, 7], ["Lviv", 23, "Kyiv", "Dnipro", "Kharkiv", "Chernivtsi", true]);
	map2.size;  // 5
	map2.get(2);  // undefined
*/


function mapCreator(keys, values) {
	const newMap = new Map();
	for (let i = 0; i < keys.length; i++) {
		const typeOfValue = typeof (values[i]);
		if (typeOfValue === 'string') {
			newMap.set(keys[i], values[i]);
		}
	}
	return newMap;
}


const map = mapCreator([1, 2, 3, 4, 5, 6, 7], ["Lviv", "Rivne", "Kyiv", "Dnipro", "Kharkiv", "Chernivtsi", "Ivano-Frankivsk"]);
console.log(map.size);  // 7
console.log(map.get(1)); //Lviv

const map2 = mapCreator([1, 2, 3, 4, 5, 6, 7], ["Lviv", 23, "Kyiv", "Dnipro", "Kharkiv", "Chernivtsi", true]);
console.log(map2.size);  // 5
console.log(map2.get(2));  // undefined
