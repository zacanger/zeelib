'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toBool = require('./to-bool');

var _toBool2 = _interopRequireDefault(_toBool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get inverse truthiness
 */

var toBoolInverse = function toBoolInverse(val /*: any*/) /*: bool*/ {
  return !(0, _toBool2.default)(val);
}; // @flow

exports.default = toBoolInverse;