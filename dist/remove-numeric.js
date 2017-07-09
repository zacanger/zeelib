'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var removeNumeric = function removeNumeric(str) {
  return str.replace(/[0-9]/g, '');
};

exports.default = removeNumeric;