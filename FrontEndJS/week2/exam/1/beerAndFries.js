'use strict';

var beerAndFries = function(items) {
	function numericSort(a, b) {
		return a - b;
	}

	var beers = [],
		fries = [],
		maxScore = 0;
	
	// put the scores in two separe
	// arrays
	items.forEach(function(item) {
		if (item.type === 'beer') {
			beers.push(item.score);
		} else {
			fries.push(item.score);
		}
	});

	// sort the arrays so that
	// the max score is last
	beers.sort(numericSort);

	fries.sort(numericSort);

	// combine beers having higher scores
	// with fries having higher scores
	beers.forEach(function(score, index) {
		maxScore += score * fries[index];
	});

	return maxScore;
};

exports.beerAndFries = beerAndFries;