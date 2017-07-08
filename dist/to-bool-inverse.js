'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toBool = require('./to-bool');

var _toBool2 = _interopRequireDefault(_toBool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get inverse truthiness
 * @example
 * toBoolInverse(1) // => false
 */

var toBoolInverse = function toBoolInverse(val) {
  return !(0, _toBool2.default)(val);
};

exports.default = toBoolInverse;