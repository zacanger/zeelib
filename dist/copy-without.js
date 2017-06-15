"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// @flow

/**
 * Copy an object, leaving out specified keys
 * cred : gh:texastoland
 * {key, ...copy} = {...target, ...source}
 */

var copyWithout = function copyWithout(target /*: Object*/, source /*: Object*/) /*: any*/ {
  for (var _len = arguments.length, keys = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    keys[_key - 2] = arguments[_key];
  }

  var copy = Object.assign(target, source);
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

exports.default = copyWithout;