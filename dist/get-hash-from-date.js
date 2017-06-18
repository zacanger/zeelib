'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns a hash based on current timestamp
 * @example
 * getHashFromDate()
 */

var getHashFromDate = function getHashFromDate() /*: string*/ {
  return (+new Date() + Math.random() * 100).toString(32).replace(/\./, '');
};

exports.default = getHashFromDate;