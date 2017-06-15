'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _span = require('./span');

var _span2 = _interopRequireDefault(_span);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The opposite of `takeWhile`:
 * takes a predicate and array and returns an
 * array of the elements that didn't pass the predicate
 */

var dropWhile = function dropWhile(pred /*: () => bool*/, arr /*: any[]*/) /*: any[]*/ {
  return (0, _span2.default)(pred, arr)[1] || [];
}; // @flow

exports.default = dropWhile;