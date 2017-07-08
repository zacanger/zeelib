"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Get the key for a value
 * @example
 * getKeyByValue('bar', { foo: 'bar' }) // => 'foo'
 */

var getKeyByValue = function getKeyByValue(value, object) {
  return Object.keys(object).find(function (key) {
    return object[key] === value;
  });
};

exports.default = getKeyByValue;