"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Gets the number in the middle
 */

var clamp = function clamp(l /*: number*/) {
  return function (h /*: number*/) {
    return function (x /*: number*/) /*: number*/ {
      return x > h ? h : x < l ? l : x;
    };
  };
};

exports.default = clamp;