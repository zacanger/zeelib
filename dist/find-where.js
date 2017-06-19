'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes a predicate and an array
 * Returns either first element that passes predicate,
 * or null
 * @example
 * findWhere(lessThanThree, [ 3, 3, 3 ]) // => null
 * findWhere(lessThanThree, [ 3, 2, 1 ]) // => 2
 */

var findWhere = function findWhere(f /*: () => bool*/, arr /*: any[]*/) /*: any*/ {
  return (0, _filter2.default)(f, arr)[0] || null;
}; // @flow

exports.default = findWhere;