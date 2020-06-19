// fill in the blanks

console.log('--- loading: honesty test');

function honestyTestHandler() {
	'use strict';
	debugger;

	// read inputs from user
	const userString = prompt(`Please enter something:`);

	const confirmation = confirm(`Did you enter something? \nyes: "ok" \nno: "cancel"`);

	// before moving on ... type check!
	if (typeof userString !== 'string') {
		try {
			throw new TypeError('type error');
		} catch (e) {
			console.log(e.message);
		}
	}

	if (typeof confirmation !== 'boolean') {
		throw new TypeError();
	}

	const didEnterSomething = Boolean(userString) ? true : false;
	// perform core logic
	let isALiar;
	if (didEnterSomething && confirmation) {
		isALiar = 'honest';
	} else if (didEnterSomething && confirmation === false) {
		isALiar = 'liar';
	} else if (didEnterSomething === false && confirmation) {
		isALiar = 'liar';
	} else if (didEnterSomething === false && confirmation === false) {
		isALiar = 'honest';
	}

	// true if the user input text, false if it is empty or null

	// display a different message depending on whether or not the user is a liar
	const message = `You are a ${isALiar}!`;

	// alert result for the user
	alert(message);

	// log action for the developer
	console.log('\n--- honesty test ---');
	console.log('userString:', typeof userString, '\n', userString);
	console.log('confirmation:', typeof confirmation, '\n', confirmation);
	console.log('message:', typeof message, '\n', message);
}
