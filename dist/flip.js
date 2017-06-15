"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * `fn -> a -> b -> fn b a`
 */

var flip = function flip(f /*: () => any*/) /*: any*/ {
  return function (a /*: any*/) {
    return function (b /*: any*/) {
      return f(b)(a);
    };
  };
};

exports.default = flip;