"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Only calls fn once; subsequent calls just return first val
 * @example
 * const o = once(id)
 * o(1) // => 1
 * o() // => 1
 * o(2) // => 1
 */

var once = function once(fn) {
  var returnValue = void 0;
  return function () {
    if (!returnValue) {
      returnValue = fn.apply(undefined, arguments);
    }
    return returnValue;
  };
};

exports.default = once;