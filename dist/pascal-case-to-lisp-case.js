'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * PascalCase to lisp-case
 * @example
 * pascalCaseToLispCase('FooBar') // => 'foo-bar'
 */

var pascalCaseToLispCase = function pascalCaseToLispCase(str /*: string*/) /*: string*/ {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(/[A-Z]/g, function (m) {
    return '-' + m.toLowerCase();
  }).toLowerCase();
};

exports.default = pascalCaseToLispCase;