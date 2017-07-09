'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isBrowser = require('./is-browser');

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getTitle = function getTitle() {
  return (0, _isBrowser2.default)() ? window.title || document.title : process.title;
};

exports.default = getTitle;