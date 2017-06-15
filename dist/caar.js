'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _car = require('./car');

var _car2 = _interopRequireDefault(_car);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `caar`
 */

var caar = function caar(a /*: any[]*/) /*: any*/ {
  return (0, _car2.default)((0, _car2.default)(a));
}; // @flow

exports.default = caar;