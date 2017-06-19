'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var toHttps = function toHttps(str /*: string*/) /*: string*/ {
  console.error('`toHttps` is deprecated.');
  return str.replace(/^http:/, 'https:');
};

exports.default = toHttps;