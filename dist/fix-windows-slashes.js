'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Fix windows-style path sep
 * cred: gh:sindresorhus/slash
 */

var fixWindowsSlashes = function fixWindowsSlashes(str /*: string*/) /*: string*/ {
  var isExtendedLengthPath = /^\\\\\?\\/.test(str);
  var hasNonAscii = /[^\x00-\x80]+/.test(str);
  if (isExtendedLengthPath || hasNonAscii) return str;
  return str.replace(/\\/g, '/');
};

exports.default = fixWindowsSlashes;