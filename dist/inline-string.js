'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var inlineString = function inlineString(str) {
  return str.replace(/(\r\n|\n|\r)/gm, ' ').replace(/[\s]+/gm, ' ');
};

exports.default = inlineString;