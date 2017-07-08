"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Capitalizes the first character of string
 * @example
 * capitalizeFirstChar('things and stuff') // => 'Things and stuff'
 */

var capitalizeFirstChar = function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.default = capitalizeFirstChar;