'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

var stripHref = function stripHref(str /*: string*/) /*: string*/ {
  console.error('`stripHref` is deprecated. Use `removeAttribute`.');
  return str.replace(/(src|href)\s*=\s*(['"])/gi, '_$1=$2');
};

exports.default = stripHref;