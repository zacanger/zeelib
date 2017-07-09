'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var collapseNewlines = function collapseNewlines(str) {
  return str.replace(/\n\s*\n/g, '\n\n');
};

exports.default = collapseNewlines;