'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _take = require('./take');

var _take2 = _interopRequireDefault(_take);

var _drop = require('./drop');

var _drop2 = _interopRequireDefault(_drop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Like Haskell's `splitAt`
 * splitAt n xs returns a tuple xs prefix of length n
 * and second element is remainder of list
 */

// @flow

var splitAt = function splitAt(num /*: number*/, arr /*: any[]*/) /*: any[]*/ {
  return [(0, _take2.default)(num, arr), (0, _drop2.default)(num, arr)];
};

exports.default = splitAt;