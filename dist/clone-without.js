'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _copyWithout = require('./copy-without');

var _copyWithout2 = _interopRequireDefault(_copyWithout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // @flow

/**
 * Clones an object, leaving out specified keys
 * cred : gh:texastoland
 * @example
 * cloneWithout({ a: 1, b: 2 }, 'a') // => { b: 2 }
 * cloneWithout({ a: 1, b: 2 }, 'a', 'b') // => {}
 */

var cloneWithout = function cloneWithout(source /*: Object*/) /*: Object*/ {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return _copyWithout2.default.apply(undefined, [{}, source].concat(_toConsumableArray(keys)));
};

exports.default = cloneWithout;