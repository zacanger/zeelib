'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _curry = require('./curry');

var _curry2 = _interopRequireDefault(_curry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns true if all items pass predicate fn
 */

var all = (0, _curry2.default)(function (predicate, list) /*: bool*/ {
  return !!list.reduce && typeof predicate === 'function' && list.reduce(function (result, current) {
    return !result ? false : !!predicate(current);
  }, true);
}); // @flow

exports.default = all;