"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Capitalizes the first character of string
 */

var capitalizeFirstChar = function capitalizeFirstChar(str /*: string*/) /*: string*/ {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

exports.default = capitalizeFirstChar;