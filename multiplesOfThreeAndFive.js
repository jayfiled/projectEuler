/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

function multThreeFiveCombined(below) {
	let multThreeAndFive = [];
	for (let i = 2; i < below; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			multThreeAndFive.push(i);
		}
	}
	return multThreeAndFive.reduce((acc, eachNum) => {
		return acc + eachNum;
	},0)
}

multThreeFiveCombined(1000); // 233168