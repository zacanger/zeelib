'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _deepCopy = require('./deep-copy');

var _deepCopy2 = _interopRequireDefault(_deepCopy);

var _shallowCopy = require('./shallow-copy');

var _shallowCopy2 = _interopRequireDefault(_shallowCopy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var copy = function copy(o, shallow) {
  console.error('`copy` is deprecated. Please use `clone` instead.');
  var copyfn = shallow ? _shallowCopy2.default : _deepCopy2.default;
  return copyfn(o);
};

exports.default = copy;