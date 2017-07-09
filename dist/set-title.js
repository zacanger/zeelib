'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isBrowser = require('./is-browser');

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setTitle = function setTitle(newTitle) {
  if ((0, _isBrowser2.default)()) {
    window.title = newTitle;
  } else {
    process.title = newTitle;
  }
};

exports.default = setTitle;