'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getHashFromDate = function getHashFromDate() {
  return (+new Date() + Math.random() * 100).toString(32).replace(/\./, '');
};

exports.default = getHashFromDate;