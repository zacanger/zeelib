'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * From lisp-case to snake_case
 * @example
 * lispCaseToSnakeCase('foo-bar') // => 'foo_bar'
 */

var lispCaseToSnakeCase = function lispCaseToSnakeCase(str) {
  return str.replace(/-/g, '_');
};

exports.default = lispCaseToSnakeCase;