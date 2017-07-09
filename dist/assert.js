'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var assert = function assert(exp) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Assertion Failed:';

  if (!exp) {
    throw new Error(message + ' ' + exp.toString());
  }
};

exports.default = assert;