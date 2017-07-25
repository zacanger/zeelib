'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isObject = require('./is-object');

var _isObject2 = _interopRequireDefault(_isObject);

var _objectFromEntries = require('./object-from-entries');

var _objectFromEntries2 = _interopRequireDefault(_objectFromEntries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sortObject = function sortObject(o) {
  if (!(0, _isObject2.default)(o)) return o;
  var ks = Object.keys(o);
  ks.sort();
  var vals = [];
  for (var i = 0; i < ks.length; i++) {
    var k = ks[i];
    vals.push([k, sortObject(o[k])]);
  }
  return (0, _objectFromEntries2.default)(vals);
};

exports.default = sortObject;