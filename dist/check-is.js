'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _is = require('./is');

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Takes a string of a type (eg 'function'),
 * any value, and an optional name for that value.
 * Throws an error if the value is not of the passed type;
 * returns the value otherwise.
 */

/*:: type R = Error | any*/ // @flow

var checkIs = function checkIs(type /*: string*/, val /*: any*/, name /*: ?string*/) /*: R*/ {
  if (!(0, _is2.default)(type, val)) {
    throw new TypeError((name || val.name || '') + ' should be of type ' + type + '!');
  }
  return val;
};

exports.default = checkIs;