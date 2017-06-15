'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow
/* eslint-disable no-return-assign */

/**
 * Indent a string
 * line: string to format
 * indent: amount by which to indent
 * limit: maxlen of line
 * accum: accumulator string
 */

var indenter = function indenter(line /*: string*/) {
  var indent /*: number*/ = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var limit /*: number*/ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 80;
  var accum /*: string*/ = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';

  if (line.length > limit) {
    var reverseSlice = line.slice(0, limit).split('').reverse('');
    var firstSpace = reverseSlice.indexOf(' ');
    var longest = reverseSlice.slice(firstSpace + 1).reverse().join('');
    var rem = ' '.repeat(indent) + line.slice(longest.length + 1);

    return indenter(rem, indent, limit, accum += longest + '\n');
  }
  return accum += line;
};

exports.default = indenter;