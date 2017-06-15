'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns random hex 32
 */

var getRandomHex32 = function getRandomHex32() /*: string*/ {
  var hexN /*: string*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return hexN.length < 32 ? getRandomHex32(hexN + (Math.random() + Math.random()).toString(16).slice(2)) : hexN.slice(0, 32);
};

exports.default = getRandomHex32;