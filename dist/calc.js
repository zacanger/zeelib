"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Takes an operation as a function
 * and returns a function that takes any number of arguments
 */

var calc = function calc(op /*: (number) => number*/) {
  return function () /*: number*/ {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return [].reduce.call(args, op);
  };
};

exports.default = calc;