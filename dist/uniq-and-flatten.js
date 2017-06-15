'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flatten = require('./flatten');

var _flatten2 = _interopRequireDefault(_flatten);

var _uniq = require('./uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @flow

var uniqAndFlatten = function uniqAndFlatten(arr /*: any[]*/) /*: any[]*/ {
  console.error('`uniqAndFlatten` is deprecated.');
  return (0, _flatten2.default)((0, _uniq2.default)(arr));
};

exports.default = uniqAndFlatten;