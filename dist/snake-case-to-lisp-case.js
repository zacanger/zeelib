'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * snake_case to lisp-case
 */

var snakeCaseToLispCase = function snakeCaseToLispCase(str /*: string*/) /*: string*/ {
  return str.replace(/_/g, '-');
};

exports.default = snakeCaseToLispCase;