// fill in the blanks

console.log('--- loading: opposite day');

function oppositeDayHandler() {
	'use strict';
	debugger;

	// read inputs from user
	const showTheNumber = confirm(`do you want to see a random number?`);
	const check_type = Number(showTheNumber);

	// before moving on ... type check!
	let message_1;
	if (typeof check_type !== 'boolean') {
		switch (check_type) {
			case 1:
				message_1 = Math.floor(Math.random() * 100);
				break;
			case 0:
				message_1 = 'No random number:)';
		}
	} else {
		try {
			throw 'Welcome guest!';
		} catch (err) {
			return alert(err);
		}
	}

	// perform core logic
	//  if they said they want to see the number, don't show it
	//  if they do want to see the number, do show it

	const message = message_1;

	// alert result for the user
	alert(message);

	// log action for the developer
	console.log('\n--- opposite day ---');
	console.log('showTheNumber:', typeof showTheNumber, '\n', showTheNumber);
	console.log('convert input type:', typeof check_type, '\n', check_type);
	console.log('message:', typeof message, '\n', message);
}
