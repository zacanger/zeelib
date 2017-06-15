'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Takes a camelCase string and returns one in lisp-case
 */

var camelCaseToLispCase = function camelCaseToLispCase(str /*: string*/) /*: string*/ {
  return str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  }).toLowerCase();
};

exports.default = camelCaseToLispCase;