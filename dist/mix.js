'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _each = require('./each');

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes an object and any other
 * arguments and mixes the two
 * @param {Object} original object
 * @param {any} other args
 * @returns {Object}
 */

function mix() /*: Object*/ {
  var mixed = {};
  (0, _each2.default)(arguments, function (obj) {
    (0, _each2.default)(obj, function (item, index) {
      mixed[index] = item;
    });
  });
  return mixed;
} // @flow

exports.default = mix;