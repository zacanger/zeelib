"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Returns true if the value is defined
 * @example
 * isDefined(null) // => true
 */

var isDefined = function isDefined(v) {
  return v !== undefined;
};

exports.default = isDefined;