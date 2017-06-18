'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIsNode = require('./get-is-node');

var _getIsNode2 = _interopRequireDefault(_getIsNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `process.exit` that optionally takes an exit code
 * @example
 * exit(1)
 */

var exit = function exit() /*: void*/ {
  var n /*: number*/ = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if ((0, _getIsNode2.default)()) {
    process.exit(n);
  }
}; // @flow

exports.default = exit;