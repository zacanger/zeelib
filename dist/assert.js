'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Takes a value and an optional failure message
 * and asserts truthiness
 * @example
 * assert(false) // => Error: Assertion Failed: false
 * assert(true) // => undefined
 * assert(false, 'NOPE') // => Error: NOPE false
 */

var assert = function assert(exp) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Assertion Failed:';

  if (!exp) {
    throw new Error(message + ' ' + exp.toString());
  }
};

exports.default = assert;