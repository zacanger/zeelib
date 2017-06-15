'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Normalize classnames. Similar to the `classnames` lib.
 * Replaces newlines with spaces, can take array of classnames,
 * converts to string
 * Returns arg as string if it's not an array or a string
 */

var normalizeClassname = function normalizeClassname(arg /*: any[] | string*/) /*: string*/ {
  var replaceNewlines = function replaceNewlines(a) {
    return a.replace(/\s+/g, ' ').trim();
  };
  var replaceArr = function replaceArr(a) {
    return a.map(function (i) {
      return '' + i;
    }).join(' ');
  };
  if (Array.isArray(arg)) return replaceNewlines(replaceArr(arg));
  if (typeof arg === 'string') return replaceNewlines(arg);
  return replaceNewlines('' + arg);
};
exports.default = normalizeClassname;