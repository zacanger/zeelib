"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Get the key for a value
 * `getKeyByValue({ foo: 'bar' }, 'bar')`
 */
var getKeyByValue = function getKeyByValue(object /*: Object*/, value /*: any*/) /*: ?string*/ {
  return Object.keys(object).find(function (key) {
    return object[key] === value;
  });
};

exports.default = getKeyByValue;