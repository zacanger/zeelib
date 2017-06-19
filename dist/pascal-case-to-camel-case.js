"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * PascalCase to camelCase
 * @example
 * pascalCaseToCamelCase('FooBar') // => 'fooBar'
 */

var pascalCaseToCamelCase = function pascalCaseToCamelCase(str /*: string*/) /*: string*/ {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

exports.default = pascalCaseToCamelCase;