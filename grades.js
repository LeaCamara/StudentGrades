
// Array of Scores
var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

// Counter variables that will be incremented when the if statement is met.
// These will hold all the array items that are A's, B's, etc.
let aCounter = 0;
let bCounter = 0;
let cCounter = 0;
let dCounter = 0;
let fCounter = 0;

// For loop to iterate over the array
for (var i = 0; i < scores.length; i++) {

	let each_score_in_array = scores[i];
	// console.log("each scoe in array -->", each_score_in_array);
	// OR
	// console.log(scores[i]);	

// If statements that determine which scores are A's, which are B's, etc., and increment the counter when a match is found.
	if (each_score_in_array >= 91 && each_score_in_array <= 100) {
		aCounter += 1;
	} else if (each_score_in_array >= 81 && each_score_in_array <= 90) {
		bCounter += 1;
	} else if (each_score_in_array >= 71 && each_score_in_array <= 80) {
		cCounter += 1;
	} else if (each_score_in_array >= 61 && each_score_in_array <= 70) {
		dCounter += 1;
	} else {
		fCounter += 1;
	}
}

// Listing how many scores are A's, how many are B's, etc:
console.log("A's: " + aCounter);
console.log("B's: " + bCounter);
console.log("C's: " + cCounter);
console.log("D's: " + dCounter);
console.log("F's: " + fCounter);

// This sort array method puts the array in numerical order:
var sortedScores = scores.sort(function(first, second) {
	return first - second;
});

// Lowest Score, when put in order, will have index of 0.
console.log("Lowest Score -->", sortedScores[0]);

// This gives you the length of the array, which is 12:
// console.log("Highest Score -->", sortedScores.length);
// But since it starts at 0, we want the length - 1, which will always be the last item in the array:
console.log("Highest Score -->", sortedScores[scores.length - 1]);
// Highest Score: 98