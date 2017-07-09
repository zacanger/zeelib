'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduce = require('./reduce');

var _reduce2 = _interopRequireDefault(_reduce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pipe = function pipe() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (data) {
    return (0, _reduce2.default)(function (v, fn) {
      return fn(v);
    }, data)(fns);
  };
};

exports.default = pipe;