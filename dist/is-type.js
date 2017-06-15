'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; /* eslint-disable no-multi-spaces */

var _isArray = require('./is-array');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// usage:
// isType(el, type)
// isType(1, 'number')
// isType(thing.something, 'array')
function isType(a, t) {
  console.error('`isType` is deprecated. Please use `is` instead.');
  var type = String(t).toLowerCase();

  if (type === 'null' && a === null || type === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) || // eslint-disable-line
  type === 'object' && a === Object(a) || type === 'array' && _isArray2.default && (0, _isArray2.default)(a) || Object.prototype.toString.call(a).slice(8, -1).toLowerCase() === type) {
    return true;
  }
  return false;
}

exports.default = isType;