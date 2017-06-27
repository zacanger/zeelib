'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isBrowser = require('./is-browser');

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var btoa = function btoa(str /*: string*/) /*: string*/ {
  return (0, _isBrowser2.default)() ? window.btoa(str) : Buffer.from ? Buffer.from(str, 'utf8').toString('base64') : new Buffer(str, 'utf8').toString('base64');
}; /* eslint-disable node/no-deprecated-api */

// @flow

/**
 * `window.btoa` for node and browser
 * @example
 * btoa('asdf') // => 'YXNkZg=='
 */

exports.default = btoa;