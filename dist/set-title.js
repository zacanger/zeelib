'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isBrowser = require('./is-browser');

var _isBrowser2 = _interopRequireDefault(_isBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Set `window.title` or `process.title`
 * @example
 * setTitle('foo')
 */

var setTitle = function setTitle(newTitle /*: string*/) /*: void*/ {
  if ((0, _isBrowser2.default)()) {
    window.title = newTitle;
  } else {
    process.title = newTitle;
  }
}; // @flow

exports.default = setTitle;