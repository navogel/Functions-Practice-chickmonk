console.log("hey");

// chicken monkey

for (let currentNumber = 1; currentNumber <= 100; currentNumber++) {
	// Divide the current number by 2, and check if the remainder is 0
	if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
		console.log("chicken monkey");
	} else if (currentNumber % 5 === 0) {
		console.log("chicken"); // Only 2, 4, 6 will appear
	} else if (currentNumber % 7 === 0) {
		console.log("Monkey");
	} else console.log(currentNumber);
}

// battle of the bands

let bandNumber = 1;

const takeNumber = function(bandName) {
	let bandOrder = `${bandNumber}. ${bandName}`;
	bandNumber++;
	return bandOrder;
};

const sum = takeNumber("Sum 82");
console.log(sum); // This should print "1. Galactic Scum" in the console

const velvet = takeNumber("Velvet Underpants");
console.log(velvet); // This should print "2. Underdogs" in the console

const oar = takeNumber("O.A.R.");
console.log(oar);

const artic = takeNumber("Arctic Donkeys");
console.log(artic);
