'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectToString = require('./object-to-string');

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if the value is a dom element
 */

var isDomElement = function isDomElement(v /*: any*/) /*: bool*/ {
  return (0, _objectToString2.default)(v).slice(8, 12) === 'HTML';
}; // @flow

exports.default = isDomElement;