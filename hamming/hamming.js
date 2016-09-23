var Hamming = function() {
};

Hamming.prototype.compute = function(strandA, strandB) {
	var hammingDistance = 0
	var strandArrayA = strandA.split("");
	var strandArrayB = strandB.split("");

	//check for equal length arrays and throw err if they are different
	if (!(strandArrayA.length === strandArrayB.length)) {
		throw 'DNA strands must be of equal length.'
	}

	//compare the strands
	for (var i = 0, len = strandArrayA.length; i < len; i++) {
		if (!(strandArrayA[i] === strandArrayB[i])) {
			hammingDistance++
		}
	}

	return hammingDistance
}

module.exports = Hamming;