'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flatten = require('./flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _uniq = require('./uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Recursively flatten arrays
 * then uniq what's left
 * @example
 * flattenAndUniq([ 1, 2, 3, [ 1, 2, 3 ]]) // =>  [ 1, 2, 3 ]
 */

// @flow

var flattenAndUniq = function flattenAndUniq(arr /*: any*/) /*: any[]*/ {
  return (0, _uniq2.default)((0, _flatten2.default)(arr));
};

exports.default = flattenAndUniq;