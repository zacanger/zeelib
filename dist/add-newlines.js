'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Adds `\n` to every line
 * @example
 * addNewlines('asdf asdf') // => 'asdf asdf\n'
 */

var addNewlines = function addNewlines(str) {
  return str.split('\t').join('  ').split('\n').map(function (e) {
    return e + '\n';
  }).join('');
};

exports.default = addNewlines;