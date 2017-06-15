"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// @flow

/**
 * Collect an an array of objects by string key
 * cred: gh:uniqname
 */

var collectBy = function collectBy(p /*: string*/) {
  return function (a /*: any[]*/) /*: Object*/ {
    return a.reduce(function (c, i) {
      return _extends({}, c, _defineProperty({}, i[p], i));
    }, {});
  };
};

exports.default = collectBy;