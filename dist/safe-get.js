'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var safeGet = function safeGet() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fallback = arguments[1];
  return function (obj) {
    return path.split(/[.[\]]/).filter(function (_) {
      return _;
    }).reduce(function (o, prop) {
      return o[prop] || '';
    }, obj) || fallback;
  };
};

exports.default = safeGet;