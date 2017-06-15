'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * https to http
 */

var toHttp = function toHttp(str /*: string*/) /*: string*/ {
  return str.replace(/^https/, 'http');
};

exports.default = toHttp;