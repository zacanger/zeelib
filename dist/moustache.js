'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var moustache = function moustache(template, replacements, syntax) {
  console.error('`moustache` is deprecated. Please use template literals instead.');
  var ms = /\{\{(\w+)\}\}/g;
  var f = function f(m, p) {
    return p in replacements ? replacements[p] : '';
  };
  return template.replace(syntax || ms, f);
};

exports.default = moustache;