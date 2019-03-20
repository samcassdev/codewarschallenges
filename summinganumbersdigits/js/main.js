function sumDigits(number) {
	return Math.abs(number).toString().split("").reduce(function(a,b) {
		return parseInt(a) + parseInt(b);
	}, 0);
}
