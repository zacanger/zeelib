'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isDefined = require('./is-defined');

var _isDefined2 = _interopRequireDefault(_isDefined);

var _isArrayLike = require('./is-array-like');

var _isArrayLike2 = _interopRequireDefault(_isArrayLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iterateArray = function iterateArray(arr, fn) {
  for (var index = 0, len = arr.length; index < len; index++) {
    var exit = fn(arr[index], index);
    if ((0, _isDefined2.default)(exit)) {
      return exit;
    }
  }
};

var iterateObject = function iterateObject(obj, fn) {
  for (var prop in obj) {
    var exit = fn(obj[prop], prop);
    if ((0, _isDefined2.default)(exit)) {
      return exit;
    }
  }
};

/**
 * Takes a an array or object
 * and a function, and runs the function
 * on each element
 * @param {array|object} list
 * @param {function} fn
 * @returns {any}
 * @example
 * each([ 'a', 'b', 'c' ], id) // => 'a'
 * each() // => undefined
 */

var each = function each(list, fn) {
  if ((0, _isArrayLike2.default)(list)) {
    return iterateArray(list, fn);
  }
  return iterateObject(list, fn);
};

exports.default = each;