'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isBrowser = require('./is-browser');

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var atob = function atob(str) {
  return (0, _isBrowser2.default)() ? window.atob(str) : Buffer.from ? Buffer.from(str, 'base64').toString('utf8') : new Buffer(str, 'base64').toString('utf8');
};

exports.default = atob;