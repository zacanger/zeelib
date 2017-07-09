'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var addNewlines = function addNewlines(str) {
  return str.split('\t').join('  ').split('\n').map(function (e) {
    return e + '\n';
  }).join('');
};

exports.default = addNewlines;