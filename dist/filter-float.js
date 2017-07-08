"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * `filterFloat` from MDN's parseFloat docs
 * @example
 * filterFloat('-111.111111111111') // => -111.111111111111
 */

var filterFloat = function filterFloat(value) {
  if (/^(-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) {
    return Number(value);
  }
  return NaN;
};

exports.default = filterFloat;