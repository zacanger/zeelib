'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * snake_case to lisp-case
 * @example
 * snakeCaseToLispCase('foo_bar') // => 'foo-bar'
 */

var snakeCaseToLispCase = function snakeCaseToLispCase(str /*: string*/) /*: string*/ {
  return str.replace(/_/g, '-');
};

exports.default = snakeCaseToLispCase;