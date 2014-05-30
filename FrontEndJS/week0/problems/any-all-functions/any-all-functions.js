'use strict';

var any = function(predicate, array) {
	for (var i = 0; i < array.length; i++) {
		if (predicate(array[i])) {
			return true;
		}
	}

	return false;
};

var all = function(predicate, array) {
	for (var i = 0; i < array.length; i++) {
		if (!predicate(array[i])) {
			return false;
		}
	}

	return true;
};

var arrToTest = [1, 2, 3, 4, 5];

var areThereAnyBiggerThanThree = any(function(x){
	return x > 3;
}, arrToTest);

var areAllBiggerThanThree = all(function(x){
	return x > 3;
}, arrToTest);

console.log(areThereAnyBiggerThanThree);
console.log(areAllBiggerThanThree);