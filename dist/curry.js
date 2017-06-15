'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Takes a function and returns a function that takes
 * any number of arguments
 * Produces a curried function
 * @param {function} fn
 * @param {any} args
 * @returns {function}
 */

var curry = function curry(fn) {
  var getFunctionArguments = function getFunctionArguments(fn) {
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

  var originalArguments = getFunctionArguments(fn) || [];

  var makeCurriedFunc = function makeCurriedFunc() {
    var givenArguments = arguments || [];
    if (givenArguments.length < originalArguments.length) {
      return function () {
        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
          rest[_key] = arguments[_key];
        }

        return makeCurriedFunc.apply(undefined, _toConsumableArray(givenArguments).concat(rest));
      };
    } else {
      return fn.apply(undefined, _toConsumableArray(givenArguments));
    }
  };

  return function () {
    return makeCurriedFunc.apply(undefined, arguments);
  };
};
exports.default = curry;