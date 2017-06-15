'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIsNode = require('./get-is-node');

var _getIsNode2 = _interopRequireDefault(_getIsNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `console.dir` with colors by default in Node
 */

var dir = function dir(obj /*: Object*/) /*: void*/ {
  return (0, _getIsNode2.default)() ? console.dir(obj, { colors: true }) : console.log(obj);
}; // @flow
exports.default = dir;