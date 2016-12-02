'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dom = require('./dom');

var dom = _interopRequireWildcard(_dom);

var _node = require('./node');

var forNode = _interopRequireWildcard(_node);

var _functional = require('./functional');

var fp = _interopRequireWildcard(_functional);

var _keycodes = require('./keycodes');

var keycodes = _interopRequireWildcard(_keycodes);

var _asYetUnsorted = require('./as-yet-unsorted');

var misc = _interopRequireWildcard(_asYetUnsorted);

var _regexStringAndColour = require('./regex-string-and-colour');

var str = _interopRequireWildcard(_regexStringAndColour);

var _typesAndMisc = require('./types-and-misc');

var util = _interopRequireWildcard(_typesAndMisc);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = {
  dom: dom,
  forNode: forNode,
  fp: fp,
  keycodes: keycodes,
  misc: misc,
  str: str,
  util: util
}; // a little kinda lib thingy idk
// just a bunch of utils really
// some stuff that's basically polyfills-ish
// needs node (there's fs stuff, etc.)
// some is modded stuff from:
// gh:nervgh/yum.js,
// gh:shapeshed/stringbean