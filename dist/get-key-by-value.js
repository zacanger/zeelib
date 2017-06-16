"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get the key for a value
 * @example
 * getKeyByValue('bar', { foo: 'bar' })
 */

var getKeyByValue = function getKeyByValue(value /*: any*/, object /*: Object*/) /*: ?string*/ {
  return Object.keys(object).find(function (key) {
    return object[key] === value;
  });
};

exports.default = getKeyByValue;