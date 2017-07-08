"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Takes an operation as a function
 * and returns a function that takes any number of arguments
 * @example
 * calc(add)(1, 2, 3) // => 6
 */

var calc = function calc(op) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return [].reduce.call(args, op);
  };
};

exports.default = calc;