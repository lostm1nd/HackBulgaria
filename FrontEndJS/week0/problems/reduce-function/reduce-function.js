'use strict';

var reduce = function(func, array, start) {
	var accumulator = start,
		i = 0;

	if (!start) {
		accumulator = array[0];
		i = 1;
	}

	for (;i < array.length; i+=1) {
		accumulator = func(accumulator, array[i]);
	}

	return accumulator;
};

var sum = reduce(function(a, b) {
	return a * b;
}, [1,2,3,4,5]);

console.log(sum);