'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isBrowser = require('./is-browser');

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `window.atob` for node and browser
 * @example
 * atob('YXNkZg==') // => 'asdf'
 */

var atob = function atob(str) {
  return (0, _isBrowser2.default)() ? window.atob(str) : Buffer.from ? Buffer.from(str, 'base64').toString('utf8') : new Buffer(str, 'base64').toString('utf8');
}; /* eslint-disable node/no-deprecated-api */

exports.default = atob;