'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * lisp-case to snake_case
 */

var lispCaseToSnakeCase = function lispCaseToSnakeCase(str /*: string*/) /*: string*/ {
  return str.replace(/-/g, '_');
};

exports.default = lispCaseToSnakeCase;