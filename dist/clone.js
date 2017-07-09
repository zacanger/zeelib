'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isArray = require('./is-array');

var _isArray2 = _interopRequireDefault(_isArray);

var _isDate = require('./is-date');

var _isDate2 = _interopRequireDefault(_isDate);

var _isRegExp = require('./is-reg-exp');

var _isRegExp2 = _interopRequireDefault(_isRegExp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var clone = function clone(obj) {
  if (obj === null || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return obj;
  }

  if ((0, _isDate2.default)(obj) || (0, _isRegExp2.default)(obj)) {
    return new obj.constructor(obj);
  } else {
    var copy = (0, _isArray2.default)(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        copy[key] = undefined.clone(obj[key]);
      }
    }
    return copy;
  }
};

exports.default = clone;