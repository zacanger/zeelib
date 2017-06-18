'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = require('os');

/**
 * Get memory usage
 * @example
 * getMemoryUsage()
 */

var getMemoryUsage = function getMemoryUsage() /*: number*/ {
  return parseFloat(((0, _os.freemem)() / (0, _os.totalmem)() / Math.pow(10, -2)).toFixed(2));
}; // @flow

exports.default = getMemoryUsage;