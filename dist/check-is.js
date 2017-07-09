'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkIs = function checkIs(type, val, name) {
  if (!(0, _is2.default)(type, val)) {
    throw new TypeError((name || val.name || val.toString() || '') + ' should be of type ' + type + '!');
  }
  return val;
};

exports.default = checkIs;