'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var newlinesToSpaces = function newlinesToSpaces(str) {
  console.error('`newlinesToSpaces` is deprecated. Please use `collapseWhitespace` instead.');
  return str.replace(/\s+/g, ' ').trim();
};

exports.default = newlinesToSpaces;