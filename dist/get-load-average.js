'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _average = require('./average');

var _average2 = _interopRequireDefault(_average);

var _os = require('os');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // @flow

/**
 * Get load average
 * @example
 * getLoadAverage()
 */

var getLoadAverage = function getLoadAverage() /*: number*/ {
  return parseFloat((0, _average2.default)([].concat(_toConsumableArray((0, _os.loadavg)()))).toFixed(2));
};

// the above line is weird because loadavg() is a tuple
// but average expects an array. ¯\_(ツ)_/¯

exports.default = getLoadAverage;