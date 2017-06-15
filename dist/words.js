'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Split a string on spaces
 */

var words = function words(str /*: string*/) /*: string[]*/ {
  return str.split(' ');
};

exports.default = words;