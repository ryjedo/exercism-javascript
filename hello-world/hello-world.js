//
// This is only a SKELETON file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {

	var name = 'world'
	if (!(input === '')) {name = input}

	return "Hello, " + name + "!"

};

module.exports = HelloWorld;
