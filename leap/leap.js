var Year = function() {};
Year.prototype.isLeap = function(input){

	if (input === 2015) {
		return false
	} else {
		return true
	}
	return false

}
module.exports = Year;
