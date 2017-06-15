'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIsBrowser = require('./get-is-browser');

var _getIsBrowser2 = _interopRequireDefault(_getIsBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var btoa = function btoa(str /*: string*/) /*: string*/ {
  return (0, _getIsBrowser2.default)() ? window.btoa(str) : Buffer.from ? Buffer.from(str, 'utf8').toString('base64') : new Buffer(str, 'utf8').toString('base64');
}; /* eslint-disable node/no-deprecated-api */

// @flow

/**
 * `window.btoa` for node and browser
 */

exports.default = btoa;