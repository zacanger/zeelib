"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * From lisp-case to PascalCase
 * @example
 * lispCaseToPascalCase('foo-bar') // => 'FooBar'
 */

var lispCaseToPascalCase = function lispCaseToPascalCase(str /*: string*/) /*: string*/ {
  var c = str.toLowerCase().replace(/-[a-z]/g, function (m) {
    return m.slice(1).toUpperCase();
  });
  return c.charAt(0).toUpperCase() + c.slice(1);
};

exports.default = lispCaseToPascalCase;