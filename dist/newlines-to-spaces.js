'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var newlinesToSpaces = function newlinesToSpaces(str /*: string*/) /*: string*/ {
  console.error('`newlinesToSpaces` is deprecated. Please use `collapseWhitespace` instead.');
  return str.replace(/\s+/g, ' ').trim();
};

exports.default = newlinesToSpaces;