"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


var pascalCaseToCamelCase = function pascalCaseToCamelCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
};

exports.default = pascalCaseToCamelCase;