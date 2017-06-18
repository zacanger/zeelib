'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable no-return-assign */

var indenter = function indenter(line, indent, limit, accum) {
  console.error('`indenter` is deprecated.');
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