"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// @flow

/**
 * A simple memoizing util
 * @example
 * memoize((a) => a) // => [Function]
 * memoize((a) => a)(1) // => 1
 */

var memoize = function memoize(fn /*: any*/) /*: any*/ {
  var results = new Map();
  return function () /*: any*/ {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var key = args.toString();
    if (!results.get(key)) {
      results.set(key, fn.apply(undefined, _toConsumableArray(args)));
    }
    return results.get(key);
  };
};

exports.default = memoize;