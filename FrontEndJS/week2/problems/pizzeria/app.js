$(document).ready(function() {
	'use strict';

	var progressBar = $('.progress-bar'),
		progressPercent = 0;

	$('#pizzas li').on('click', function() {
		$('.pizza').removeClass('pizza');
		$(this).addClass('pizza');
	});

	$('#sizes li').on('click', function() {
		$('.size').removeClass('size');
		$(this).addClass('size');
	});

	$('.btn-success').on('click', function() {
		var selectedPizza = $('.pizza').text(),
			selectedSize = $('.size').text().toLowerCase();
			
		if (selectedPizza === '' || selectedSize === ''){
			alert('You must choose pizza and size.');
		} else {
			progressBar.css('width', progressPercent + '%');

			var pizza = getPizzas().find(function(p) {
				if (p.name === selectedPizza) {
					return true;
				}
			});

			var orderedPizza = new Pizza(pizza.name,
										pizza.costLv[selectedSize],
										pizza.timeMs[selectedSize]);

			var order = new PizzaOrder(orderedPizza);

			var interval = pizza.timeMs[selectedSize] / 100,
				intervalID = setInterval(function() {
					updateProgress();
				}, interval);


			order.ready(function() {
				$("#made-pizzas").text(
					'Your ' + selectedSize + ' ' + selectedPizza +
					' is ready. Cost: ' +
					pizza.costLv[selectedSize] + ' lv.'
					);

				clearInterval(intervalID);
				progressPercent = 0;
			});

			order.start();
		}
	});

	function getPizzas() {
		return [{
				  "name" : "Pepperoni",
				  "costLv" : {"small": 4, "medium": 5.65, "large": 6.5},
				  "timeMs" : {"small": 1500, "medium": 2000, "large": 2500}
				}, {
				  "name" : "Margherita",
				  "costLv" : {"small": 3.4, "medium": 4.6, "large": 5.5},
				  "timeMs" : {"small": 1000, "medium": 1500, "large": 2000}
				}, {
				  "name" : "Quatro staggione",
				  "costLv" : {"small": 4.3, "medium": 5.9, "large": 7.2},
				  "timeMs" : {"small": 2000, "medium": 2500, "large": 3000}
				}, {
				  "name" : "Diavola",
				  "costLv" : {"small": 4.1, "medium": 5.3, "large": 6.4},
				  "timeMs" : {"small": 1700, "medium": 2100, "large": 2700}
				}, {
				  "name" : "Veggie",
				  "costLv" : {"small": 3, "medium": 4.2, "large": 5.4},
				  "timeMs" : {"small": 1400, "medium": 1900, "large": 2300}
				}];
	}

	function updateProgress() {
		progressPercent += 1;
		progressBar.css('width', (progressPercent) + '%');
	}
});

Array.prototype.find = function find(predicate) {
	return this.filter(predicate)[0];
};