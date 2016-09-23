var Year = function(input) {
	this.inputYear = input
};

Year.prototype.isLeap = function(input){
	if (!(this.inputYear % 4)){
		if (!(this.inputYear % 400)){
			return true
		} else if (!(this.inputYear % 100)){
			return false
		} else {
			return true
		}
	} else {
		return false
	}
}

module.exports = Year;
