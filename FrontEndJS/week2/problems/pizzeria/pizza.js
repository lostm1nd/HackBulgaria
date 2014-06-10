'use strict';

function Pizza(name, cost, timeToPrepare) {

  if (!(this instanceof Pizza)) {
    return new Pizza(name, cost, timeToPrepare);
  }

  this.getName = function getName() {
    return name;
  };

  this.getCost = function getCost() {
    return cost;
  };

  this.getTimeToPrepare = function getTimeToPrepare() {
    return timeToPrepare;
  };

}

exports.Pizza = Pizza;
