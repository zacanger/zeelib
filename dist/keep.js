'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _id = require('./id');

var _id2 = _interopRequireDefault(_id);

var _filter = require('./filter');

var _filter2 = _interopRequireDefault(_filter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns an array with all falsey values removed
 * @param {Array} a
 * @returns {Array}
 * @example
 * keep([ 'a', null, '', 2]) // => [ 'a', 2 ]
 */

var keep = function keep(a) {
  return (0, _filter2.default)(_id2.default, a);
};

exports.default = keep;