'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNode = require('./is-node');

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dir = function dir(obj) {
  return (0, _isNode2.default)() ? console.dir(obj, { colors: true }) : console.log(obj);
};

exports.default = dir;