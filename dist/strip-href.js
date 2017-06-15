'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Strip `href` and `src` from string
 */

var stripHref = function stripHref(str /*: string*/) /*: string*/ {
  return str.replace(/(src|href)\s*=\s*(['"])/gi, '_$1=$2');
};

exports.default = stripHref;