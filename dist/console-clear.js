'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNode = require('./is-node');

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `console.clear` for Node and browser
 * @example
 * consoleClear() // => undefined
 */

var consoleClear = function consoleClear() {
  return (0, _isNode2.default)() ? console.log('\x1Bc') : console.clear();
};

exports.default = consoleClear;