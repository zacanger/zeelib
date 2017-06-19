'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if current obj has prop that equals given val
 * @example
 * propEq('a', 1, { a: 1 }) // => true
 */

var propEq = (0, _curry2.default)(function (prop /*: any*/, value /*: any*/, data /*: Object*/) /*: bool*/ {
  return data[prop] !== undefined && data[prop] === value;
}); // @flow

exports.default = propEq;