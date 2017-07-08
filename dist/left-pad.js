'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * It's just left-pad
 * Yes, really
 * @example
 * leftPad('asdf', 8) // => '    asdf'
 * leftPad('asdf', 8, 'z') // => 'zzzzasdf'
 */

var leftPad = function leftPad(str, len) {
  var pd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  return Array(len > str.length ? 1 + len - str.length : 0).join(pd) + str;
};

exports.default = leftPad;