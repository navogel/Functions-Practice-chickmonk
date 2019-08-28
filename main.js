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

// cookout

const hamburger = {
	name: "Hamburger",
	type: "beef",
	cooked: false
};
const zucchini = {
	name: "Zucchini",
	type: "vegetable",
	cooked: false
};
const chickenBreast = {
	name: "Chicken Breast",
	type: "chicken",
	cooked: false
};
const corn = {
	name: "Corn",
	type: "vegetable",
	cooked: false
};
const steak = {
	name: "Steak",
	type: "beef",
	cooked: false
};

// An array that is grouping the objects together.
const foods = [hamburger, zucchini, chickenBreast, corn, steak];

// An empty array that will store the objects after the `grill()` function cooks the food.
const cookedFood = [];

console.log("cooked food status:", foods[0].name, foods[0].cooked);
console.log("cooked food status:", foods[1].name, foods[1].cooked);

function grill(currentObject) {
	currentObject.cooked = true;
	cookedFood.push(currentObject);
}

foods.forEach(element => {
	grill(element);
});

console.log("cooked food", cookedFood);
console.log("cooked food status:", foods[0].name, foods[0].cooked);
console.log("cooked food status:", foods[1].name, foods[1].cooked);
