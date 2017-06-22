'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var stripSubdomain = function stripSubdomain(str /*: string*/) /*: string*/ {
  console.error('`stripSubdomain` is deprecated. Use `removeSubdomain`.');
  return str.split('').filter(function (c /*: string*/) {
    return c === '.';
  }).length > 2 ? str.replace(/^[^.]+\./g, '') : str;
};

exports.default = stripSubdomain;