'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _zipWith = require('./zip-with');

var _zipWith2 = _interopRequireDefault(_zipWith);

var _invoke = require('./invoke');

var _invoke2 = _interopRequireDefault(_invoke);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes a function and a list, then another list
 * Returns the result of calling the function on the result
 * of calling zipWith on the lists
 * @param {function} after
 * @param {Array} xs
 * @param {Array} ys
 * @returns {any}
 */

var zipThen = function zipThen(after, xs) {
  return function () {
    for (var _len = arguments.length, ys = Array(_len), _key = 0; _key < _len; _key++) {
      ys[_key] = arguments[_key];
    }

    return after.apply(after, (0, _zipWith2.default)(_invoke2.default, xs, ys));
  };
};

exports.default = zipThen;