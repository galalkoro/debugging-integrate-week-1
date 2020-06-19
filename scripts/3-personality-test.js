// fix the bugs

console.log('--- loading: personality test');

function personalityTestHandler() {
	'use strict';
	debugger;

	// read inputs from user
	const likesPuppies = confirm(`Do you like puppies?`);
	const eatsVegetables = confirm(`Do you eat vegetables?`);
	const sleepsEnough = confirm('Do you sleep enough?');

	// before moving on ... type check!
	if (typeof likesPuppies !== 'boolean') {
		throw new TypeError();
	}
	if (typeof eatsVegetables !== 'boolean') {
		throw new TypeError();
	}
	if (typeof sleepsEnough !== 'boolean') {
		throw new TypeError();
	}

	// perform core logic
	const isHealthy = eatsVegetables || sleepsEnough;
	const isAGoodPerson = likesPuppies && isHealthy;
	const adjective = isAGoodPerson ? 'good' : 'bad';
	const message = `You are a ${adjective}  person`;

	// alert result for the user
	alert(message);

	// log action for the developer
	console.log('\n--- personality test ---');
	console.log('likesPuppies:', typeof likesPuppies, '\n', likesPuppies);
	console.log('eatsVegetables:', typeof eatsVegetables, '\n', eatsVegetables);
	console.log('sleepsEnough:', typeof sleepsEnough, '\n', sleepsEnough);
	console.log('isHealthy:', typeof isHealthy, '\n', isHealthy);
	console.log('isAGoodPerson:', typeof isAGoodPerson, '\n', isAGoodPerson);
	console.log('adjective:', typeof adjective, '\n', adjective);
	console.log('message:', typeof message, '\n', message);
}
