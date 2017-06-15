'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contains = require('./contains');

var _contains2 = _interopRequireDefault(_contains);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notContains = function notContains(el /*: any*/, ls /*: string | any[]*/) /*: bool*/ {
  console.error('`notContains` is deprecated. Please use `notElem` instead.');
  return !(0, _contains2.default)(el, ls);
}; // @flow

exports.default = notContains;