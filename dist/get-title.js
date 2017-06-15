'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getIsBrowser = require('./get-is-browser');

var _getIsBrowser2 = _interopRequireDefault(_getIsBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Returns title of either window or document, or process,
 * depending on environment
 */

var getTitle = function getTitle() /*: string*/ {
  return (0, _getIsBrowser2.default)() ? window.title || document.title : process.title;
}; // @flow

exports.default = getTitle;