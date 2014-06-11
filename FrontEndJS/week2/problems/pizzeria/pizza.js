function Pizza(name, cost, timeToPrepare) {
  'use strict';

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
