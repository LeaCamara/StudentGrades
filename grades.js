console.log("grades.js")

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

let aCounter = 0;
let bCounter = 0;
let cCounter = 0;
let dCounter = 0;
let fCounter = 0;

for (var i = 0; i < scores.length; i++) {

	let each_score_in_array = scores[i];
	// console.log("each scoe in array -->", each_score_in_array);
	// OR
	// console.log(scores[i]);	

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

console.log("A's: " + aCounter);
console.log("B's: " + bCounter);
console.log("C's: " + cCounter);
console.log("D's: " + dCounter);
console.log("F's: " + fCounter);

var sortedScores = scores.sort(function(first, second) {
	return first - second;
});

console.log("Lowest Score -->", sortedScores[0]);
console.log("Highest Score -->", sortedScores[scores.length - 1]);
// console.log("Highest Score -->", sortedScores.length - 1);

