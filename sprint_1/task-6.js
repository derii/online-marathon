/*
	Task - 6.
	Please, implement a function accountPatients that takes a count of free beds in a hospital and returns two functions:
the first one for adding a patient
the second one for discharging a patient
accountPatients should keep track of free beds in a hospital and every time when a patient is admitted or discharged, 
print the count to the console like in examples:

A patient was discharged, 54 beds are available
A patient was admitted, 34 beds are available
When there are no beds available,
Can not admit a patient, no beds available should be printed
When there is an attempt to discharge a patient when there are no patients,
There are no patients to discharge should be printed
*/

const accountPatients = (freeBeds) => {
	let patient = 0;
	function admit() {
		if (freeBeds >= 0) {
			freeBeds--;
			patient++;
			if (freeBeds < 0 || freeBeds === undefined) {
				freeBeds++;
				patient--;
				console.log('Can not admit a patient, no beds available');
			} else
				console.log(`A patient was admitted, ${freeBeds} beds are available`);
		}
	}
	function discharge() {

		if (patient <= 0) {
			patient--;
			freeBeds++;
			console.log('There are no patients to discharge');
		} else {
			patient--;
			freeBeds++;
			console.log(`A patient was discharged, ${freeBeds} beds are available`);
		}
	}
	return [admit, discharge]
}

const [admit, discharge] = accountPatients(3);
admit();
admit();
admit();
admit();
discharge();
discharge();
discharge();
discharge();

/*
  A patient was admitted, 2 beds are available
  A patient was admitted, 1 beds are available
  A patient was admitted, 0 beds are available
  Can not admit a patient, no beds available
  A patient was discharged, 1 beds are available
  A patient was discharged, 2 beds are available
  A patient was discharged, 3 beds are available
  There are no patients to discharge
*/
