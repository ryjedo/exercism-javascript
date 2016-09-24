var DnaTranscriber = function() {}

DnaTranscriber.prototype.toRna = function(input) {
	var nucs = input.split('')
	var result = ''
	for (var i = 0, len = nucs.length; i < len; i++) {
		var translatedNuc = ''
		switch(nucs[i]) {
			case 'C':
				translatedNuc = 'G'
				break;
			case 'G':
				translatedNuc = 'C'
				break;
			case 'A':
				translatedNuc = 'U'
				break;
			case 'T':
				translatedNuc = 'A'
				break;
			default:
				throw 'recieved unexpected input' 
		}		
		result = result + translatedNuc
	}
	return result
}

module.exports = DnaTranscriber