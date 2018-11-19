const returnFirstTwoDrivers = function(drivers) {
	return drivers.slice(0,2)
}

const returnLastTwoDrivers = function(drivers) {
	return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function(n) {
	return function(n) {
		return n*n
	}
}

const fareDoubler = function(n) {
	return n*2
}

const fareTripler = function(n) {
	return n*3
}

const fetchSpecifiedDrivers = function(arrayOfDrivers, pass_function) {
	return pass_function(arrayOfDrivers)
}