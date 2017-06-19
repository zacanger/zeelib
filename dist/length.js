'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('./is-array');

var _isArray2 = _interopRequireDefault(_isArray);

var _isMap = require('./is-map');

var _isMap2 = _interopRequireDefault(_isMap);

var _isObject = require('./is-object');

var _isObject2 = _interopRequireDefault(_isObject);

var _isSet = require('./is-set');

var _isSet2 = _interopRequireDefault(_isSet);

var _isString = require('./is-string');

var _isString2 = _interopRequireDefault(_isString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get length of element
 * Works for array, object, string, set, and map
 * @example
 * length('foo') // => 3
 * length([ 1, 2 ]) => 2
 */

var length = function length(val /*: any*/) /*: number*/ {
  if ((0, _isArray2.default)(val) || (0, _isString2.default)(val)) return val.length;
  if ((0, _isMap2.default)(val) || (0, _isSet2.default)(val)) return val.size;
  if ((0, _isObject2.default)(val)) return Object.keys(val).length;
  return 0;
}; // @flow

exports.default = length;