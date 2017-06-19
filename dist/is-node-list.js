'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArrayLike = require('./is-array-like');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if the value is a nodelist
 * @example
 * isNodeList(document.getElementsByTagName('span')) // => true
 */

var isNodeList = function isNodeList(v /*: any*/) /*: bool*/ {
  return (0, _isArrayLike2.default)(v) && /^\[object (HTMLCollection|NodeList)\]$/.test(v + '');
}; // @flow

exports.default = isNodeList;