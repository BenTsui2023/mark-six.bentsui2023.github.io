let result = document.getElementById("result");

function draw() {
	let num1 = parseInt(document.getElementById("num1").value);
	let num2 = parseInt(document.getElementById("num2").value);
	let num3 = parseInt(document.getElementById("num3").value);
	let num4 = parseInt(document.getElementById("num4").value);
	let num5 = parseInt(document.getElementById("num5").value);
	let num6 = parseInt(document.getElementById("num6").value);

	// check the type and range of the input
	if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4) || isNaN(num5) || isNaN(num6)) {
		result.innerHTML = "Please enter valid numbers";
		return;
	}

	if (num1 < 1 || num1 > 49 || num2 < 1 || num2 > 49 || num3 < 1 || num3 > 49 || num4 < 1 || num4 > 49 || num5 < 1 || num5 > 49 || num6 < 1 || num6 > 49) {
		result.innerHTML = "The numbers must be between 1 and 49, please re-enter";
		return;
	}

	// Generate the random numbers
	let randomNumbers = [];
	while (randomNumbers.length < 6) {
        let randomNumber = Math.floor(Math.random() * 49) + 1;
		if (randomNumbers.indexOf(randomNumber) == -1) {
			randomNumbers.push(randomNumber);
		}
	}

	// Sort the winning numbers in ascending order
	randomNumbers.sort(function(a, b) {
		return a - b;
	});

	// Compare the player's numbers with the winning numbers
	let numMatches = 0;
	if (randomNumbers.indexOf(num1) !== -1) {
		numMatches++;
	}
	if (randomNumbers.indexOf(num2) !== -1) {
		numMatches++;
	}
	if (randomNumbers.indexOf(num3) !== -1) {
		numMatches++;
	}
	if (randomNumbers.indexOf(num4) !== -1) {
		numMatches++;
	}
	if (randomNumbers.indexOf(num5) !== -1) {
		numMatches++;
	}
	if (randomNumbers.indexOf(num6) !== -1) {
		numMatches++;
	}

	// Display the results
	result.innerHTML = "Winning Numbers: " + randomNumbers.join(", ") + "<br>" + "Your Numbers: " + num1 + ", " + num2 + ", " + num3 + ", " + num4 + ", " + num5 + ", " + num6 + "<br>" + "Number of Matches: " + numMatches;
}
