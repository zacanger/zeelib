'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var leftPad = function leftPad(str, len) {
  var pd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  return Array(len > str.length ? 1 + len - str.length : 0).join(pd) + str;
};

exports.default = leftPad;