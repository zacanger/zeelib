'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * It's just left-pad
 * Yes, really
 */

var leftPad = function leftPad(str /*: string*/, len /*: number*/) /*: string*/ {
  var pd /*: string*/ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  return Array(len > str.length ? 1 + len - str.length : 0).join(pd) + str;
};

exports.default = leftPad;