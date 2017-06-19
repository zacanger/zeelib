'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clone = require('./clone');

var _clone2 = _interopRequireDefault(_clone);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var objectInherit = function objectInherit(target /*: Object*/, source /*: Object*/) /*: void*/ {
  console.error('`objectInherit` is deprecated.');
  target.super_ = source;
  target.prototype = Object.create(target.super_.prototype);
  var descriptor = (0, _clone2.default)(target.super_.descriptor) || {};
  descriptor.constructor = {
    value: target,
    enumerable: false,
    writable: true,
    configurable: true
  };
  Object.defineProperties(target.prototype, descriptor);
}; // @flow

exports.default = objectInherit;