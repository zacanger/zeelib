'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isSymbol = function isSymbol(a) {
  return (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'symbol';
};

exports.default = isSymbol;