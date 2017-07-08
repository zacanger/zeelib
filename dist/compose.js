'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pipe = require('./pipe');

var _pipe2 = _interopRequireDefault(_pipe);

var _reverse = require('./reverse');

var _reverse2 = _interopRequireDefault(_reverse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Right to left composition
 * @example
 * const addOne = (a) => a + 1
 * const timesTwo = (a) => a * 2
 * compose(addOne, timesTwo)(2) // => 5
 */

var compose = function compose() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return _pipe2.default.apply(undefined, _toConsumableArray((0, _reverse2.default)(fns)));
};

exports.default = compose;