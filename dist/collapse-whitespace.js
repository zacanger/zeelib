'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Collapses consecutive whitespace to a single space
 * @example
 * collapseWhitespace('a\n\r\t\nb') // => 'a b'
 */

var collapseWhitespace = function collapseWhitespace(str) {
  return str.replace(/\s+/g, ' ');
};

exports.default = collapseWhitespace;