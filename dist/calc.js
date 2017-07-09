"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var calc = function calc(op) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return [].reduce.call(args, op);
  };
};

exports.default = calc;