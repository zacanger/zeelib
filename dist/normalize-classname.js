'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var normalizeClassname = function normalizeClassname(arg) {
  console.error('`normalizeClassname` is deprecated. Please use the `classnames` lib instead.');
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