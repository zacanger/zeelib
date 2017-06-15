"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Check if a string or array contains an element
 */

var elem = function elem(el /*: any*/, ls /*: string | any[]*/) /*: bool*/ {
  return ls.includes(el);
};

exports.default = elem;