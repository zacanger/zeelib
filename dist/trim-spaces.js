'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var trimSpaces = function trimSpaces(str) {
  return typeof str === 'string' ? str.replace(/\s/g, '') : str;
};

exports.default = trimSpaces;