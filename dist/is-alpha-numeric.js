"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns true if the string is alphanumeric
 */

var isAlphaNumeric = function isAlphaNumeric(str /*: string*/) /*: bool*/ {
  return (/[0-9a-zA-Z]+/.test(str)
  );
};

exports.default = isAlphaNumeric;