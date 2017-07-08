'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * PascalCase to snake_case
 * @example
 * pascalCaseToSnakeCase('FooBar') // => 'foo_bar'
 */

var pascalCaseToSnakeCase = function pascalCaseToSnakeCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(/[A-Z]/g, function (m) {
    return '_' + m.toLowerCase();
  }).toLowerCase();
};

exports.default = pascalCaseToSnakeCase;