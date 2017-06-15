"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Uncurry a function
 */

var uncurry = function uncurry(f /*: () => any*/) {
  return function (a /*: any*/, b /*: any*/) /*: any*/ {
    return f(a)(b);
  };
};

exports.default = uncurry;