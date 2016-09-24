//
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

	var splitInput = input.split('')

	if (input.replace(/ /g,'') === '') {
		return 'Fine. Be that way!'
	} else if (input.match(/[a-z]/i) && input.toUpperCase() === input) {
		return 'Whoa, chill out!'
	} else if (splitInput[splitInput.length - 1] === '?') {
		return 'Sure.'
	} else {
		return 'Whatever.'
	}
};

module.exports = Bob;