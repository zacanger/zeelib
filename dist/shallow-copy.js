'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _isArray = require('./is-array');

var _isArray2 = _interopRequireDefault(_isArray);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shallowCopy = function shallowCopy(o) {
  console.error('`shallowCopy` is deprecated. Please use `clone` instead.');
  var newObj = void 0;
  if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) !== 'object') {
    return o;
  }
  if ((0, _isArray2.default)(o)) {
    return o.slice(0);
  }
  newObj = {};
  Object.keys(o).forEach(function (prop) {
    newObj[prop] = o[prop];
  });
  return newObj;
};

exports.default = shallowCopy;