'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var abbrev = function abbrev(str) {
  return str.match(/\b([A-Z])/g) ? str.match(/\b([A-Z])/g).join('') : str;
};

exports.default = abbrev;