'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Split a string on lines
 */

var lines = function lines(str /*: string*/) /*: string[]*/ {
  return str.split('\n');
};

exports.default = lines;