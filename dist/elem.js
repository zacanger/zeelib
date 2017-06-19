"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Check if a string or array contains an element
 * @example
 * elem('a', 'asdf') // => true
 * elem('a', 'asdf'.split('')) // => true
 */

var elem = function elem(el /*: any*/, ls /*: string | any[]*/) /*: bool*/ {
  return ls.includes(el);
};

exports.default = elem;