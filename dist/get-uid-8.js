'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Returns a random uid of length 8
 * @example
 * getUid8()
 */

var getUid8 = function getUid8() /*: string*/ {
  return (Math.random().toString(36) + '00000000000000000').slice(2, 10);
};

exports.default = getUid8;