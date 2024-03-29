/*
	Task - 6.
	Suppose, you have an array of students:

	let students = [{
	name: 'Anna',
	languages: ['English', 'Ukrainian'],
	age: 21
	}, {
	name: 'Bob',
	languages: ['Polish', 'Spanish'],
	age: 26
	}, {
	name: 'Alice',
	languages: ['Italian', 'Russian'],
	age: 18
	}]

	Please, implement a function getLanguages.
	The function takes an array of students as a first parameter
	and a condition on a student (function)
	getLanguages should return an array of languages from students that satisfy a condition.

	For example:
	getLanguages(students, student => student.age < 26) should return
	['English', 'Ukrainian',  'Italian', 'Russian']

	getLanguages(students, student => student.name === 'Alice') should return
	['Italian', 'Russian']

	getLanguages(students) should return
	['English', 'Ukrainian','Polish', 'Spanish', 'Italian', 'Russian']

	Try to use reduce and not use loops to solve this task.
*/

let students = [{
	name: 'Anna',
	languages: ['English', 'Ukrainian'],
	age: 21
}, {
	name: 'Bob',
	languages: ['Polish', 'Spanish'],
	age: 26
}, {
	name: 'Alice',
	languages: ['Italian', 'Russian'],
	age: 18
}]

const getLanguages = (students, isCorrespond) => {
	return students.reduce((accum, currentValue) => {
		if (isCorrespond) {
			if (isCorrespond(currentValue)) {
				accum.push(...currentValue.languages);
			}
		} else {
			accum.push(...currentValue.languages);
		}
		return accum;
	}, [])
}

console.log(getLanguages(students)); //[ 'English', 'Ukrainian', 'Polish', 'Spanish', 'Italian', 'Russian' ]
