'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var removeWhitespace = function removeWhitespace(str) {
  console.error('`removeWhitespace` is deprecated. Please use `collapseWhitespace`.');
  return str.replace(/^\s+|\s+$/, '');
};

exports.default = removeWhitespace;