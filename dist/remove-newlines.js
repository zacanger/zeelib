'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var removeNewlines = function removeNewlines(str) {
  return str.replace(/(\r\n|\n|\r)/gm, '');
};

exports.default = removeNewlines;