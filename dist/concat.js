'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('./is-array');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var concat = function concat(a) {
  var res = [];
  a.forEach(function (e) {
    if ((0, _isArray2.default)(e)) {
      res = res.concat(e);
    }
  });
  return res;
};

exports.default = concat;