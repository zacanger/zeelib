'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIsBrowser = require('./get-is-browser');

var _getIsBrowser2 = _interopRequireDefault(_getIsBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Set `window.title` or `process.title`
 */

var setTitle = function setTitle(newTitle /*: string*/) /*: void*/ {
  if ((0, _getIsBrowser2.default)()) {
    window.title = newTitle;
  } else {
    process.title = newTitle;
  }
}; // @flow

exports.default = setTitle;