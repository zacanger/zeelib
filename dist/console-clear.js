'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIsNode = require('./get-is-node');

var _getIsNode2 = _interopRequireDefault(_getIsNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `console.clear` for Node and browser
 * @example
 * consoleClear() // => undefined
 */

var consoleClear = function consoleClear() /*: void*/ {
  return (0, _getIsNode2.default)() ? console.log('\x1Bc') : console.clear();
}; // @flow

exports.default = consoleClear;