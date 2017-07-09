'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _each = require('./each');

var _each2 = _interopRequireDefault(_each);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mix() {
  var mixed = {};
  (0, _each2.default)(arguments, function (obj) {
    (0, _each2.default)(obj, function (item, index) {
      mixed[index] = item;
    });
  });
  return mixed;
}

exports.default = mix;