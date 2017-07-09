'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elem = require('./elem');

var _elem2 = _interopRequireDefault(_elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var notElem = function notElem(el, ls) {
  return !(0, _elem2.default)(el, ls);
};

exports.default = notElem;