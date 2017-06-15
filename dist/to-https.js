'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * http to https
 */

var toHttps = function toHttps(str /*: string*/) /*: string*/ {
  return str.replace(/^http:/, 'https:');
};

exports.default = toHttps;