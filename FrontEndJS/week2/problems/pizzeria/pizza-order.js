'use strict';

function PizzaOrder(pizza) {

  if (!(pizza instanceof Pizza)) {
    throw new TypeError('The pizza must be an instanceof Pizza.');
  }

  var orderId = getRandomInt(0, 10000),
      readyCallback;

  this.getId = function getId() {
    return orderId;
  };

  this.getPizza = function getPizza() {
    return pizza;
  };

  this.setCallback = function setCallback(callback) {
    readyCallback = callback;
  };

  this.getCallback = function getCallback() {
    return readyCallback;
  };

}

PizzaOrder.prototype.start = function start() {

  var time = this.getPizza().getTimeToPrepare(),
      thisOrder = this;

  setTimeout(function() {
    thisOrder.getCallback()(thisOrder.getPizza(), thisOrder);
  }, time);
};

PizzaOrder.prototype.ready = function ready(callback) {
  this.setCallback(callback);
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
