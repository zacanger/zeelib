"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * PascalCase to camelCase
 * @example
 * pascalCaseToCamelCase('FooBar') // => 'fooBar'
 */

var pascalCaseToCamelCase = function pascalCaseToCamelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

exports.default = pascalCaseToCamelCase;