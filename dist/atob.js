'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIsBrowser = require('./get-is-browser');

var _getIsBrowser2 = _interopRequireDefault(_getIsBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * `window.atob` for node and browser
 * @example
 * atob('YXNkZg==') // => 'asdf'
 */

var atob = function atob(str /*: string*/) /*: string*/ {
  return (0, _getIsBrowser2.default)() ? window.atob(str) : Buffer.from ? Buffer.from(str, 'base64').toString('utf8') : new Buffer(str, 'base64').toString('utf8');
}; /* eslint-disable node/no-deprecated-api */

// @flow

exports.default = atob;