'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * PascalCase to snake_case
 * @example
 * pascalCaseToSnakeCase('FooBar') // => 'foo_bar'
 */

var pascalCaseToSnakeCase = function pascalCaseToSnakeCase(str /*: string*/) /*: string*/ {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(/[A-Z]/g, function (m) {
    return '_' + m.toLowerCase();
  }).toLowerCase();
};

exports.default = pascalCaseToSnakeCase;