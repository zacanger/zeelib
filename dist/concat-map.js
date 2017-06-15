'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('./is-array');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like Haskell's `concatMap`,
 * a one-level flatten of an array of arrays,
 * calling `f` on each of the sub-arrays
 */

var concatMap = function concatMap(f /*: () => any*/, a /*: Array<any[]>*/) /*: any[]*/ {
  var res = [];
  a.forEach(function (el) {
    if ((0, _isArray2.default)(el)) {
      res = res.concat(f(el));
    }
  });
  return res;
}; // @flow

exports.default = concatMap;