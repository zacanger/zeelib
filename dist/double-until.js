"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// @flow

/**
 * Double an array until it's n long
 * `doubleUntil(10)[ 'hi' ]`
 */

var doubleUntil = function doubleUntil() {
  var minSize /*: number*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return function double(arr /*: any[]*/) /*: any[]*/ {
    if (arr.length >= minSize) {
      return arr;
    }
    return double([].concat(_toConsumableArray(arr), _toConsumableArray(arr)));
  };
};

exports.default = doubleUntil;