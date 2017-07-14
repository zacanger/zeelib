'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var fixWindowsSlashes = function fixWindowsSlashes(str) {
  console.error('`fixWindowsSlashes` is deprecated. Please use the `slash` lib.');
  var isExtendedLengthPath = /^\\\\\?\\/.test(str);
  var hasNonAscii = /[^\x00-\x80]+/.test(str);
  if (isExtendedLengthPath || hasNonAscii) return str;
  return str.replace(/\\/g, '/');
};

exports.default = fixWindowsSlashes;