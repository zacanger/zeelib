'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // @flow

var _isArray = require('./is-array');

var _isArray2 = _interopRequireDefault(_isArray);

var _isDate = require('./is-date');

var _isDate2 = _interopRequireDefault(_isDate);

var _isRegExp = require('./is-reg-exp');

var _isRegExp2 = _interopRequireDefault(_isRegExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Enhanced `typeof`
 * @example
 * typeOf('a') // => 'string'
 * typeOf(new Date()) // => 'date'
 */

var typeOf = function typeOf(a /*: any*/) /*: string*/ {
  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
    if (a === null) return 'null';
    if (a && a.nodeType === 1) return 'dom';
    if ((0, _isArray2.default)(a)) return 'array';
    if ((0, _isDate2.default)(a)) return 'date';
    if ((0, _isRegExp2.default)(a)) return 'regexp';
    return 'object';
  }
  return typeof a === 'undefined' ? 'undefined' : _typeof(a);
};

exports.default = typeOf;