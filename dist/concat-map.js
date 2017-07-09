'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('./is-array');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var concatMap = function concatMap(f, a) {
  var res = [];
  a.forEach(function (el) {
    if ((0, _isArray2.default)(el)) {
      res = res.concat(f(el));
    }
  });
  return res;
};

exports.default = concatMap;