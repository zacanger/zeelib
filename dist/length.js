'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isArray = require('./is-array');

var _isArray2 = _interopRequireDefault(_isArray);

var _isMap = require('./is-map');

var _isMap2 = _interopRequireDefault(_isMap);

var _isObject = require('./is-object');

var _isObject2 = _interopRequireDefault(_isObject);

var _isSet = require('./is-set');

var _isSet2 = _interopRequireDefault(_isSet);

var _isString = require('./is-string');

var _isString2 = _interopRequireDefault(_isString);

var _isFunction = require('./is-function');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var length = function length(val) {
  if ((0, _isArray2.default)(val) || (0, _isString2.default)(val) || (0, _isFunction2.default)(val)) return val.length;
  if ((0, _isMap2.default)(val) || (0, _isSet2.default)(val)) return val.size;
  if ((0, _isObject2.default)(val)) return Object.keys(val).length;
  return 0;
};

exports.default = length;