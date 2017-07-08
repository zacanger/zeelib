'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Remove all newlines from string
 * @example
 * removeNewlines('\n\na\n\n') // => 'a'
 */

var removeNewlines = function removeNewlines(str) {
  return str.replace(/(\r\n|\n|\r)/gm, '');
};

exports.default = removeNewlines;