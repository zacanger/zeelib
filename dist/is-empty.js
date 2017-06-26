'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isString = require('./is-string');

var _isString2 = _interopRequireDefault(_isString);

var _isArrayLike = require('./is-array-like');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _isObject = require('./is-object');

var _isObject2 = _interopRequireDefault(_isObject);

var _isNullOrUndefined = require('./is-null-or-undefined');

var _isNullOrUndefined2 = _interopRequireDefault(_isNullOrUndefined);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if the value is empty
 * @example
 * isEmpty('') // => true
 * isEmpty({}) // => true
 * isEmpty([]) // => true
 * isEmpty(null) // => true
 */

// @flow

var isEmpty = function isEmpty(v /*: any*/) /*: bool*/ {
  if ((0, _isNullOrUndefined2.default)(v)) return true;
  if ((0, _isString2.default)(v)) return (/^\s*$/.test(v)
  );
  // /^[ \t\s]*$/.test(v)
  if ((0, _isArrayLike2.default)(v)) return !v.length;
  if ((0, _isObject2.default)(v)) return !Object.keys(v).length;
  return !v;
};

exports.default = isEmpty;