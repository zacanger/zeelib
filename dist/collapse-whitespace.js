'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var collapseWhitespace = function collapseWhitespace(str) {
  return str.replace(/\s+/g, ' ');
};

exports.default = collapseWhitespace;