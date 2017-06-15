'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var getFunctionArguments = function getFunctionArguments(fn) {
  console.error('`getFunctionArguments` is deprecated. Please use `...args` instead.');
  if (typeof fn !== 'function') {
    throw new TypeError('Expected argument to be a function! Received a ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) + '.');
  }

  var functionAsString = fn.toString();

  if (functionAsString) {
    var m = functionAsString.match(/\(.*?\)/);
    if (m && m[0]) {
      var args = m[0] // match everything between brackets
      .replace(/[()]/gi, '' // remove brackets
      ).replace(/\s/gi, '' // remove all whitespace
      ).split(',' // split on the commas

      );return args.filter(function (x) {
        return x;
      } // remove possible empty string from the result
      );
    }
  }
};

exports.default = getFunctionArguments;