'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isNode = require('./is-node');

var _isNode2 = _interopRequireDefault(_isNode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `process.exit` that optionally takes an exit code
 * @example
 * exit(1)
 */

var exit = function exit() {
  var n = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

  if ((0, _isNode2.default)()) {
    process.exit(n);
  }
};

exports.default = exit;