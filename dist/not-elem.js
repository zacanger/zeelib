'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _elem = require('./elem');

var _elem2 = _interopRequireDefault(_elem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The opposite of `elem`
 * Returns true if the element is not in the string or array
 */

var notElem = function notElem(el /*: any*/, ls /*: string | any[]*/) /*: bool*/ {
  return !(0, _elem2.default)(el, ls);
}; // @flow

exports.default = notElem;