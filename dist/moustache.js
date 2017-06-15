'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var moustache = function moustache(template /*: string*/, replacements /*: Object*/, syntax /*: RegExp*/) /*: string*/ {
  console.error('`moustache` is deprecated. Please use template literals instead.');
  var ms = /\{\{(\w+)\}\}/g;
  var f = function f(m, p) {
    return p in replacements ? replacements[p] : '';
  };
  return template.replace(syntax || ms, f);
};

exports.default = moustache;