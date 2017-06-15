'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArrayLike = require('./is-array-like');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

var _each = require('./each');

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `filter` for array and object
 */

// @flow

function filter(list /*: any[]*/, fn /*: any*/) /*: Object | any[]*/ {
  var isArr = (0, _isArrayLike2.default)(list);
  var filtered = isArr ? [] : {};

  (0, _each2.default)(list, function (item, index) {
    if (fn(item, index)) {
      if (isArr) {
        index = filtered.length;
      }
      filtered[index] = item;
    }
  });

  return filtered;
}

exports.default = filter;