'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var removeNonNumeric = function removeNonNumeric(str) {
  return str.replace(/[^0-9-.]/g, '');
};

exports.default = removeNonNumeric;