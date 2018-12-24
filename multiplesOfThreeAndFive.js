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