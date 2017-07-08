"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});


/**
 * Clones an object, leaving out specified keys
 * cred : gh:texastoland
 * @example
 * cloneWithout({ a: 1, b: 2 }, 'a') // => { b: 2 }
 * cloneWithout({ a: 1, b: 2 }, 'a', 'b') // => {}
 */

var cloneWithout = function cloneWithout(source) {
  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  var copy = Object.assign({}, source);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      delete copy[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return copy;
};

exports.default = cloneWithout;