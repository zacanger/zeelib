"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * snake_case to PascalCase
 * @example
 * snakeCaseToPascalCase('foo_bar') // => 'FooBar'
 */

var snakeCaseToPascalCase = function snakeCaseToPascalCase(str) {
  var c = str.toLowerCase().replace(/_[a-z]/g, function (m) {
    return m.slice(1).toUpperCase();
  });
  return c.charAt(0).toUpperCase() + c.slice(1);
};

exports.default = snakeCaseToPascalCase;