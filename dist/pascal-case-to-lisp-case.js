'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var pascalCaseToLispCase = function pascalCaseToLispCase(str) {
  return str.charAt(0).toLowerCase() + str.slice(1).replace(/[A-Z]/g, function (m) {
    return '-' + m.toLowerCase();
  }).toLowerCase();
};

exports.default = pascalCaseToLispCase;