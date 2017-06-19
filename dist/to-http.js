'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var toHttp = function toHttp(str /*: string*/) /*: string*/ {
  console.error('`toHttp` is deprecated.');
  return str.replace(/^https/, 'http');
};

exports.default = toHttp;