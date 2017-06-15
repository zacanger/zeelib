'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Takes a value and an optional failure message
 * and asserts truthiness
 */

/*:: type res = void | Error*/
var assert = function assert(exp /*: any*/) /*: res*/ {
  var message /*: ?string*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Assertion Failed:';

  if (!exp) {
    throw new Error(message + exp.toString());
  }
};

exports.default = assert;