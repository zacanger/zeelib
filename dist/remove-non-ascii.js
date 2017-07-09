'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var removeNonAscii = function removeNonAscii(str) {
  return str.replace(/[^\x20-\x7E]/g, '');
};

exports.default = removeNonAscii;