'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Adds `\n` to every line
 */

var addNewlines = function addNewlines(str /*: string*/) /*: string*/ {
  return str.split('\t').join('  ').split('\n').map(function (e) {
    return e + '\n';
  }).join('');
};

exports.default = addNewlines;