// fix the bugs

console.log('--- loading: magic number');

function magicNumberHandler() {
	'use strict';
	debugger;

	// read inputs from user
	const input1 = prompt(`What's your favorite number?`);
	const faveNumber = Number(input1);
	const input2 = prompt('On which date were you born?');
	const birthDate = Number(input2);

	// before moving on ... type check!
	if (typeof faveNumber !== 'number') {
		throw new TypeError();
	}
	if (typeof birthDate !== 'number') {
		throw new TypeError();
	}

	// perform core logic
	const magicNumber = Math.abs(faveNumber - birthDate);
	const message = `your magic number is:  ${magicNumber}`;

	// alert result for the user
	alert(message);

	// log action for the developer
	console.log('\n--- magic number ---');
	console.log('input1:', typeof input1, '\n', input1);
	console.log('favenumber:', typeof faveNumber, '\n', faveNumber);
	console.log('input2:', typeof input2, '\n', input2);
	console.log('birthDate:', typeof birthDate, '\n', birthDate);
	console.log('message:', typeof message, '\n', message);
}
