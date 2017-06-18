"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// @flow

/**
 * Make a list out of all arguments
 * @example
 * list(1, 2, 3) // => [ 1, 2, 3 ]
 */

var list = function list() /*: any[]*/ {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return [].concat(_toConsumableArray(args));
};

exports.default = list;