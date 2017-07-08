"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * From lisp-case to PascalCase
 * @example
 * lispCaseToPascalCase('foo-bar') // => 'FooBar'
 */

var lispCaseToPascalCase = function lispCaseToPascalCase(str) {
  var c = str.toLowerCase().replace(/-[a-z]/g, function (m) {
    return m.slice(1).toUpperCase();
  });
  return c.charAt(0).toUpperCase() + c.slice(1);
};

exports.default = lispCaseToPascalCase;