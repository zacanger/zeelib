'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var getCookie = function getCookie(name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length === 2) return parts.pop().split(';').shift();
};

exports.default = getCookie;