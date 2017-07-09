'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var reverseDigits = function reverseDigits(num) {
  return Math.sign(num) * ('' + Math.abs(num)).split('').reverse().join('') || 0;
};

exports.default = reverseDigits;