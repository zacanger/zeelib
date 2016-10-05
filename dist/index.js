'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isObjectEmpty = exports.filterFloat = exports.getTerminalSize = exports.getTerminalRows = exports.getTerminalCols = exports.unfold = exports.once = exports.pipe = exports.reverse = exports.reduce = exports.propEq = exports.memoize = exports.identity = exports.compose = exports.all = exports.getFunctionArguments = exports.curry = exports.isEmail = exports.dropWhere = exports.findWhere = exports.objectFromEntries = exports.complimentaryCols = exports.LightenDarkenColor = exports.clr = exports.open = exports.isMobileOrTablet = exports.minify = exports.getNodeModules = exports.inlineString = exports.isAlphanumeric = exports.isEmptyStr = exports.addNewlines = exports.removeAllWhitespace = exports.newlineRemove = exports.newlinesToSpaces = exports.noSwitch = exports.memoizeWithCache = exports.memoizeSimple = exports.brokenImg = exports.transparentGif = exports.invoker = exports.tinyRouter = exports.logWithInfo = exports.withInfo = exports.throwError = exports.getScrollBarWidth = exports.getHeight = exports.getWidth = exports.scrollTop = exports.sleep = exports.hasColour = exports.userHome = exports.Po2 = exports.revNum = exports.transposeFlat = exports.transpose = exports.isNegative = exports.isPositive = exports.leftpad = exports.copyWithout = exports.cloneWithout = exports.lesser = exports.xor = exports.niceDate = exports.nco = exports.err = exports.snakeCaseToCamelCase = exports.lispCaseToCamelCase = exports.cameCaseToSnakeCase = exports.camelCaseToLispCase = exports.normText = exports.randomHex32 = exports.otherShortUid = exports.shortUid = exports.writeJsonSync = exports.writejson = exports.readJsonSync = exports.readJson = exports.isJson = exports.randomCol = exports.normalizeColor = exports.isValidHex = exports.isHexBased = exports.trimSpaces = exports.trimHash = exports.hex = exports.capitalize = exports.base64Decode = exports.base64Encode = exports.removeNumeric = exports.removeNonNumeric = exports.removeNonAlphanumeric = exports.removeAlpha = exports.unescapeHTML = exports.escapeHTML = exports.isElement = exports.isDefined = exports.isUndefined = exports.isNull = exports.isPrimitive = exports.copy = exports.shallowCopy = exports.deepCopy = exports.isFunction = exports.isArrayLike = exports.isArray = exports.isRegExp = exports.isDate = exports.isString = exports.isBoolean = exports.objInherit = exports.objAssign = exports.objClone = exports.isEqualObj = exports.objToString = exports.isObject = exports.isEven = exports.isOdd = exports.isFloat = exports.isInteger = exports.isNumber = exports.isNaN = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; }; // a little kinda lib thingy idk
// just a bunch of utils really
// some stuff that's basically polyfills-ish
// needs node (there's fs stuff, etc.)
// some is modded stuff from:
// gh:nervgh/yum.js,
// gh:shapeshed/stringbean

exports.greatestCommonDivisor = greatestCommonDivisor;
exports.leastCommonMultiple = leastCommonMultiple;
exports.rot13 = rot13;
exports.isType = isType;
exports.tryExecNTimes = tryExecNTimes;
exports.logWithTimestamp = logWithTimestamp;
exports.toType = toType;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _util = require('util');

var _util2 = _interopRequireDefault(_util);

var _os = require('os');

var _os2 = _interopRequireDefault(_os);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// returns true if val is NaN
var isNaN = exports.isNaN = Number.isNaN;

// returns true if val is num
var isNumber = exports.isNumber = function isNumber(v) {
  return typeof v === 'number' && isNaN(v);
};

// returns true if num is int
var isInteger = exports.isInteger = Number.isInteger || function (n) {
  return (n | 0) === n;
};

// returns true if num is float
var isFloat = exports.isFloat = function isFloat(n) {
  return (n | 0) !== n;
};

// returns true if num is odd
var isOdd = exports.isOdd = function isOdd(n) {
  return (n & 1) !== 0;
};

// returns true if num is even
var isEven = exports.isEven = function isEven(n) {
  return (n & 1) === 0;
};

// returns greatest common divisor
function greatestCommonDivisor() {
  var i = arguments.length;
  var a = arguments[--i];
  while (a && i) {
    var b = arguments[--i];
    while (b) {
      var c = a % b;
      a = b;
      b = c;
    }
  }
  return a;
}

// returns least common multiple
function leastCommonMultiple() {
  var i = arguments.length;
  var a = arguments[--i];
  while (a && i) {
    var b = arguments[--i];
    a = a * b / greatestCommonDivisor(a, b);
  }
  return a;
}

// returns true if val is obj
var isObject = exports.isObject = function isObject(v) {
  return objToString.call(v) === '[object Object]';
};

// toString
var objToString = exports.objToString = Object.prototype.toString;

// compares params by val
var isEqualObj = exports.isEqualObj = function isEqualObj(a, b) {
  if (a === b) {
    return true;
  }
  return JSON.stringify(a) === JSON.stringify(b);
};

// clones object
var objClone = exports.objClone = function objClone(obj) {
  // Number, String, Boolean, Function, null, undefined
  if (obj === null || (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object') {
    return obj;
  }

  // Date and RegExp
  if (isDate(obj) || isRegExp(obj)) {
    return new obj.constructor(obj);
    // Array and Object
  } else {
    var _copy = isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        _copy[key] = undefined.clone(obj[key]);
      }
    }
    return _copy;
  }
};

// copy vals of all enumerable own properties from source obj to target obj
var objAssign = exports.objAssign = Object.assign || function (target, source) {
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
  return target;
};

// inherits target by source
var objInherit = exports.objInherit = function objInherit(target, source) {
  target.super_ = source;
  target.prototype = Object.create(target.super_.prototype);
  var descriptor = objClone(target.super_.descriptor) || {};
  descriptor.constructor = {
    value: target,
    enumerable: false,
    writable: true,
    configurable: true
  };
  Object.defineProperties(target.prototype, descriptor);
};

// returns true if val is bool
var isBoolean = exports.isBoolean = function isBoolean(v) {
  return typeof v === 'boolean';
};

// returns true if val is str
var isString = exports.isString = function isString(v) {
  return typeof v === 'string';
};

// returns true if val is date
var isDate = exports.isDate = function isDate(v) {
  return objToString.call(v) === '[object Date]';
};

// returns true if val is regex
var isRegExp = exports.isRegExp = function isRegExp(v) {
  return objToString.call(v) === '[object RegExp]';
};

// returns true if val is arr
var isArray = exports.isArray = Array.isArray || function (v) {
  return objToString.call(v) === '[object Array]';
};

var isArrayLike = exports.isArrayLike = function isArrayLike(v) {
  return v && isNumber(v.length);
};

// returns true if val is fn
var isFunction = exports.isFunction = function isFunction(v) {
  return typeof v === 'function';
};

// these don't go extending stuff

// deepcopy obj
var deepCopy = exports.deepCopy = function deepCopy(o) {
  var newObj = void 0;
  if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) !== 'object') {
    return o;
  }
  if (isArray(o)) {
    return o.map(function (it) {
      return deepCopy(it);
    });
  }
  newObj = {};
  Object.keys(o).forEach(function (prop) {
    newObj[prop] = deepCopy(o[prop]);
  });
  return newObj;
};

// shallow copy (top level)
var shallowCopy = exports.shallowCopy = function shallowCopy(o) {
  var newObj = void 0;
  if (!o || (typeof o === 'undefined' ? 'undefined' : _typeof(o)) !== 'object') {
    return o;
  }
  if (isArray(o)) {
    return o.slice(0);
  }
  newObj = {};
  Object.keys(o).forEach(function (prop) {
    newObj[prop] = o[prop];
  });
  return newObj;
};

// copy obj, either shallow or deep
var copy = exports.copy = function copy(o, shallow) {
  var copyfn = shallow ? shallowCopy : deepCopy;
  return copyfn(o);
};
// returns true if val is primitive
var isPrimitive = exports.isPrimitive = function isPrimitive(v) {
  if (v === null) {
    return true;
  }
  var t = typeof v === 'undefined' ? 'undefined' : _typeof(v);
  return t !== 'object' && t !== 'function';
};

// returns true if val is null
var isNull = exports.isNull = function isNull(v) {
  return v === null;
};

// returns true if val is undefined
var isUndefined = exports.isUndefined = function isUndefined(v) {
  return v === undefined;
};

// returns true if val is defined
var isDefined = exports.isDefined = function isDefined(v) {
  return v !== undefined;
};

// returns true if val is DOM el
var isElement = exports.isElement = function isElement(v) {
  return objToString.call(v).slice(8, 12) === 'HTML';
};

// escapes html
var escapeHTML = exports.escapeHTML = function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
};

// unescapes escaped html
var unescapeHTML = exports.unescapeHTML = function unescapeHTML(str) {
  return str.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
};

// removes non-alphabetic chars
var removeAlpha = exports.removeAlpha = function removeAlpha(str) {
  return str.replace(/[^A-Za-z ]+/g, '');
};

// removes non-alpha-numeric chars
var removeNonAlphanumeric = exports.removeNonAlphanumeric = function removeNonAlphanumeric(str) {
  return str.replace(/[^A-Za-z0-9 ]+/g, '');
};

// removes non-numeric chars
var removeNonNumeric = exports.removeNonNumeric = function removeNonNumeric(str) {
  return str.replace(/[^0-9-.]/g, '');
};

// removes numeric chars
var removeNumeric = exports.removeNumeric = function removeNumeric(str) {
  return str.replace(/[0-9]/g, '');
};

// base64 encodes
var base64Encode = exports.base64Encode = function base64Encode(str) {
  return new Buffer(str).toString('base64');
};

// base64 decodes
var base64Decode = exports.base64Decode = function base64Decode(str) {
  return new Buffer(str, 'base64').toString('utf8');
};

// capitalizes first char
var capitalize = exports.capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// colour utilities
var hex = exports.hex = /^#?[a-f0-9]{3}|[a-f0-9]{6}$/i;

// takes string colour, returns string
var trimHash = exports.trimHash = function trimHash(color) {
  return typeof color === 'string' ? color.replace('#', '') : color;
};

// takes string colour, returns string
var trimSpaces = exports.trimSpaces = function trimSpaces(color) {
  return typeof color === 'string' ? color.replace(/\s/g, '') : color;
};

// takes string colour, returns bool
var isHexBased = exports.isHexBased = function isHexBased(color) {
  return hex.text(color);
};

// takes string colour, returns bool
var isValidHex = exports.isValidHex = function isValidHex(color) {
  return isHexBased(trimSpaces(color));
};

// takes string colour, returns either string or null
var normalizeColor = exports.normalizeColor = function normalizeColor(color) {
  var nextColor = trimSpaces(color);
  if (!isHexBased(color)) {
    return null;
  }
  nextColor = trimHash(nextColor);
  if (nextColor.length === 3) {
    nextColor = nextColor.replace(/./g, function (d) {
      return d + d;
    });
  }
  return nextColor.toUpperCase();
};

// gives you a random colour
var randomCol = exports.randomCol = function randomCol() {
  var hex = Math.floor(Math.random() * 16777215).toString(16);
  var pad = '000000';
  return '#' + (pad + hex).slice(-pad.length);
};

// json utils (mostly node ones)

// checks if is json
var isJson = exports.isJson = function isJson(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

// read json file, parse it, call cb with obj or err
var readJson = exports.readJson = function readJson(file, cb) {
  _fs2.default.readFile(file, 'utf8', function (err, json) {
    if (err) {
      cb(err);
      return;
    }
    var data = void 0;
    try {
      data = JSON.parse(json);
    } catch (e) {
      cb(e);
      return;
    }
    cb(null, data);
  });
};

// same as above, but sync
var readJsonSync = exports.readJsonSync = function readJsonSync(file) {
  return JSON.parse(_fs2.default.readFileSync(file, 'utf8'));
};

// write with data
var writejson = exports.writejson = function writejson(file, data, indent, cb) {
  if (typeof cb !== 'function') {
    cb = indent;
    indent = 0;
  }
  var json = void 0;
  try {
    json = JSON.stringify(data, null, indent);
  } catch (e) {
    cb(e);
    return;
  }
  _fs2.default.writeFile(file, json, 'utf8', cb);
};

// write json with data, sync
var writeJsonSync = exports.writeJsonSync = function writeJsonSync(file, data, indent) {
  if (typeof indent !== 'number') {
    indent = 0;
  }
  _fs2.default.writeFileSync(file, JSON.stringify(data, null, indent), 'utf8');
};

// rot13
function rot13(s) {
  return (s || this).split('').map(function (_) {
    if (!_.match(/[A-Za-z]/)) {
      return _;
    }
    var c = Math.floor(_.charCodeAt(0) / 97);
    var k = (_.toLowerCase().charCodeAt(0) - 83) % 26 || 26;
    return String.fromCharCode(k + (c === 0 ? 64 : 96));
  }).join('');
}

// generates short uid
var shortUid = exports.shortUid = function shortUid() {
  return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
};

// i don't know why
var otherShortUid = exports.otherShortUid = function otherShortUid() {
  return (Math.random().toString(36) + '00000000000000000').slice(2, 10);
};

var randomHex32 = exports.randomHex32 = function randomHex32() {
  var hexN = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return hexN.length < 32 ? randomHex32(hexN + (Math.random() + Math.random()).toString(16).slice(2)) : hexN.slice(0, 32);
};

// normalize text
var normText = exports.normText = function normText(text) {
  return text.toLowerCase().match(/[a-z0-9]([a-z0-9.]*[a-z0-9])?/ig).join(' ');
};

// credit: texas toland
// export const pipe = (x, ...s) =>
// s.reduce((y, f) =>
// f(y), x)
// more verbosely
// const pipe = (initialValue, ...fns) =>
// fns.reduce((state, fn) => fn(state), initialValue)

// convert camelCase to lisp-case
var camelCaseToLispCase = exports.camelCaseToLispCase = function camelCaseToLispCase(str) {
  return str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase();
  }).toLowerCase();
};

// convert camelCase to snake_case
var cameCaseToSnakeCase = exports.cameCaseToSnakeCase = function cameCaseToSnakeCase(str) {
  return str.replace(/[A-Z]/g, function (match) {
    return '_' + match.toLowerCase();
  }).toLowerCase();
};

// convert lisp-case to camelCase
var lispCaseToCamelCase = exports.lispCaseToCamelCase = function lispCaseToCamelCase(str) {
  return str.toLowerCase().replace(/-[a-z]/g, function (match) {
    return match.slice(1).toUpperCase();
  });
};

// convert snake_case to camelCase
var snakeCaseToCamelCase = exports.snakeCaseToCamelCase = function snakeCaseToCamelCase(str) {
  return str.replace(/(_\w)/g, function (match) {
    return match[1].toUpperCase();
  });
};

// use instead of `console.error()`; logs to file and stdout both
var fn = process.argv[2] || process.env.ERR_FILE || 'err.log';
var file = _fs2.default.createWriteStream(__dirname + '/' + fn, { flags: 'w' });
var err = exports.err = function err(d) {
  file.write(_util2.default.format(d) + '\n');
  process.stdout.write(_util2.default.format(d) + '\n');
};

// gh:artificerentertainment
var nco = exports.nco = function nco(variable, defaultValue) {
  return variable === null || typeof variable === 'undefined' ? defaultValue : variable;
};

var niceDate = exports.niceDate = '[' + Date(Date.now() * 1000).match(/(\d{2}:\d{2}:\d{2})/)[1] + ']';

// usage: // isType(1, 'number', 'string') ; isType([], 'array') ; etc.
function isType(a) {
  var types = Array.prototype.slice.call(arguments, 1);

  for (var i = 0, len = types.length; i < len; i++) {
    var type = String(types[i]).toLowerCase();

    if (type === 'null' && a === null || type === (typeof a === 'undefined' ? 'undefined' : _typeof(a)) || type === 'object' && a === Object(a) || type === 'array' && isArray && isArray(a) || Object.prototype.toString.call(a).slice(8, -1).toLowerCase() === type) {
      return true;
    }
  }
  return false;
}

var xor = exports.xor = function xor(a, b) {
  return !a !== !b;
};

var lesser = exports.lesser = function lesser(a, b) {
  return a < b ? a : b;
};

// cred : gh:texastoland
// {key, ...clone} = source
var cloneWithout = exports.cloneWithout = function cloneWithout(source) {
  var _exports;

  for (var _len = arguments.length, keys = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    keys[_key - 1] = arguments[_key];
  }

  return (_exports = exports).copyWithout.apply(_exports, [{}, source].concat(keys));
};
// {key, ...copy} = {...target, ...source}
var copyWithout = exports.copyWithout = function copyWithout(target, source) {
  for (var _len2 = arguments.length, keys = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    keys[_key2 - 2] = arguments[_key2];
  }

  var copy = objAssign(target, source);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = keys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var key = _step.value;

      delete copy[key];
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return copy;
};

// left-pad (yes, really)
var leftpad = exports.leftpad = function leftpad(str, len) {
  var pd = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';
  return Array(len > str.length ? 1 + len - str.length : 0).join(pd) + str;
};

// positive/negative nums with type checking
var isPositive = exports.isPositive = function isPositive(x) {
  return +x === x && x > 0;
};
var isNegative = exports.isNegative = function isNegative(x) {
  return +x === x && x < 0;
};

// transpose a 2-dimensional matrix like [[1,2,3],[4,5,6],[7,8,9]]
var transpose = exports.transpose = function transpose(m) {
  return m.map(function (r, ri) {
    return r.map(function (c, ci) {
      return m[ci][ri];
    });
  });
};

// transpose a flat matrix like [1,2,3,4,5,6,7,8,9]
var transposeFlat = exports.transposeFlat = function transposeFlat(m) {
  var l = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Math.sqrt(m.length) | 0;
  return m.map(function (c, i) {
    return m[i % l * l + i / l | 0];
  });
};

// reverse digits with correct sign handling
var revNum = exports.revNum = function revNum(n) {
  return Math.sign(n) * ('' + Math.abs(n)).split('').reverse().join('') || 0;
};

// is num power of two
var Po2 = exports.Po2 = function Po2(n) {
  return 1 << n.toString(2).length - 1 === n;
};

// not sure which of these is better
var userHome = exports.userHome = process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME'];
// export const userHome = process.env.HOME ||
//   process.env.HOMEPATH ||
//   process.env.USERPROFILE
// export const userHome = os.homedir()

// adapted from facebook utility scripts
// run fn n times
// return 0 on success
// return code of last failed if no more tries left
function tryExecNTimes(funcToRetry, retriesLeft, onEveryError) {
  var exitCode = funcToRetry();
  if (exitCode === 0) {
    return exitCode;
  } else {
    if (onEveryError) {
      onEveryError();
    }
    retriesLeft--;
    console.log('Command failed, ' + retriesLeft + ' retries left');
    if (retriesLeft === 0) {
      return exitCode;
    } else {
      return tryExecNTimes(funcToRetry, retriesLeft, onEveryError);
    }
  }
}

// check if a terminal supports colour
var isWin = function isWin() {
  return process.platform === 'win32';
};
var isColour = function isColour() {
  var termColour = /^screen|^xterm|^vt100|color|ansi|cygwin|linux/i;
  return !!process.env.COLORTERM || termColour.test(process.env.TERM);
};
var hasColour = exports.hasColour = isWin() || isColour();

// i know this is pointless but i think it's cute
var sleep = exports.sleep = function sleep(ms) {
  var start = new Date().getTime();
  while (new Date().getTime() - start < ms) {}
};

// some dom things
var scrollTop = exports.scrollTop = function scrollTop() {
  return global.scrollTo(0, 0);
};

var getWidth = exports.getWidth = function getWidth() {
  return global.innerWidth || global.document.documentElement.clientWidth;
};

var getHeight = exports.getHeight = function getHeight() {
  return global.innerHeight || global.document.documentElement.clientHeight;
};

var getScrollBarWidth = exports.getScrollBarWidth = function getScrollBarWidth() {
  return global.innerWidth - global.document.documentElement.clientWidth;
};

// logging things
var throwError = exports.throwError = function throwError(err) {
  throw new Error(err);
};

function logWithTimestamp() {
  var date = new Date();
  var timestamp = date.getDate() + '/' + date.getMonth() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + '.' + date.getMilliseconds();
  var message = Array.prototype.slice.call(arguments);
  message.unshift('--');
  message.unshift(timestamp);
  console.log.apply(console, message);
}

var withInfo = exports.withInfo = function withInfo() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return str + ':' + _os2.default.hostname() + ':' + process.pid;
};

var logWithInfo = exports.logWithInfo = function logWithInfo() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return console.log(withInfo(str));
};

// this is a tiny router. hence the name.
var tinyRouter = exports.tinyRouter = function tinyRouter(pathname, response) {
  var html = void 0,
      filePath = void 0;
  if (pathname !== '/favicon.ico') {
    try {
      filePath = './' + pathname;
      console.log('loading ' + filePath);
      html = _fs2.default.readFileSync(filePath);
      response.write(html);
      response.end();
    } catch (err) {
      console.log('unable to load ' + filePath);
      response.end();
    }
  }
};

// invokes until function returns truthily
// examples:
// Succeeds after 15 calls
// let i = 0
// invoker(20, 100)(() => {
// console.log(i)
// return ++i > 15
// }, console.log)
// Fails after 20 calls
// let ii = 0
// invoker(20, 100)(() => {
// console.log(ii)
// return ++ii > 22
// }, console.log)
var invoker = exports.invoker = function invoker(limit, interval) {
  return function (fn, cb) {
    var current = 0;
    var _fn = function _fn() {
      current++;
      var result = fn();
      if (result) {
        cb(null, result);
      } else if (current < limit) {
        setTimeout(_fn, interval);
      } else {
        cb(new Error('Limit exceeded!'), null);
        cb = function cb() {};
      }
    };
    _fn();
  };
};

// run only once
// usage:
// function foo (cb) {
// cb = once(cb)
// if (!cb.called) {
// // do things
// }
// }
// export function once (fn) {
// let f = function () {
// if (f.called) {
// return f.value
// }
// f.called = true
// return f.value = fn.apply(this, arguments)
// }
// f.called = false
// return f
// }

// you should never rely on something like this to validate an email.
// email validation is basically impossible, so find some stable library
// to do it for you.
// export const isEmail = email =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)
// export const isEmail = email =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
// export const isEmail = email =>
//   /^([\w-\.]*(\+[a-z0-9-]+)?@([\w-]+\.)+[\w-]{2,10})?$/.test(email)

var transparentGif = exports.transparentGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
var brokenImg = exports.brokenImg = 'data:;base64,iVBORwOKGO==';

var memoizeSimple = exports.memoizeSimple = function memoizeSimple(fn) {
  var cachedArg = void 0,
      cachedRes = void 0;
  return function (arg) {
    if (cachedArg === arg) {
      return cachedRes;
    }
    cachedArg = arg;
    cachedRes = fn(arg);
    return cachedRes;
  };
};

var memoizeWithCache = exports.memoizeWithCache = function memoizeWithCache(fn) {
  return function (arg, memoCache) {
    if (memoCache.arg === arg) {
      return memoCache.res;
    }
    var res = fn(arg);
    memoCache.arg = arg;
    memoCache.res = res;
    return res;
  };
};

// export function memoize = function(fn) {
// const cache = {}
// const fnVal = function(val) {
// return val
// }
// return function() {
// const key = fnVal.apply(this, arguments)
// if (key in cache) {
// return cache[key]
// } else {
// const v = fn.apply(this, arguments)
// cache[key] = v
// return v
// }
// }
// }
//
// function memoize (fn) {
// var cache = {}
// return function (n) {
// var key = JSON.stringify([].slice.call(arguments))
// if (!(key in cache)) {
// cache[key] = fn.apply(null, arguments)
// }
// return cache[key]
// }
// }

// see: gh:egoist/switchy
var noSwitch = exports.noSwitch = function noSwitch() {
  var conds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (c) {
    if (typeof conds[c] === 'function') {
      return conds[c]();
    } else if (typeof conds.default === 'function') {
      return conds.default();
    }
  };
};

var newlinesToSpaces = exports.newlinesToSpaces = function newlinesToSpaces(str) {
  return str.replace(/\s+/g, ' ').trim();
};

var newlineRemove = exports.newlineRemove = function newlineRemove(str) {
  return str.replace(/(\r\n|\n|\r)/gm, '');
};

var removeAllWhitespace = exports.removeAllWhitespace = function removeAllWhitespace(str) {
  return str.replace(/^\s+|\s+$/, '');
};

// add \n to every line
var addNewlines = exports.addNewlines = function addNewlines(s) {
  return s.split('\t').join('  ').split('\n').map(function (e, i, a) {
    return e + '\n';
  });
};

var isEmptyStr = exports.isEmptyStr = function isEmptyStr(str) {
  if (str === undefined || str === null) {
    return true;
  }
  return (/^[ \t\s]*$/.test(str)
  );
};

var isAlphanumeric = exports.isAlphanumeric = function isAlphanumeric(str) {
  return (/[0-9a-zA-Z]+/.test(str)
  );
};

var inlineString = exports.inlineString = function inlineString(str) {
  str = str.replace(/(\r\n|\n|\r)/gm, ' ');
  return str.replace(/[\s]+/gm, ' ');
};

//
var getNodeModules = exports.getNodeModules = function getNodeModules() {
  var nodeModules = {};
  _fs2.default.readdirSync('node_modules').filter(function (a) {
    return ['.bin'].indexOf(a) === -1;
  }).forEach(function (b) {
    nodeModules[b] = 'commonjs ' + b;
  });
  return nodeModules;
};

var minify = exports.minify = function minify(str) {
  return str.replace(/\n/g, '').replace(/\s\s+/g, ' ');
};

// this is really long. i didn't write this. geez.
var isMobileOrTablet = exports.isMobileOrTablet = function isMobileOrTablet(device) {
  return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(device) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(device.substr(0, 4))
  );
};

// export const curry = fn => {
// const length = fn.length
// const acc = (...args) => {
// if (args.length === length) return fn(...args)
// return (...args) => acc(...args.concat(args))
// }
// return acc
// }

var open = exports.open = function open(args, opts, cb) {
  args = [args];
  var cmd = process.platform === 'win32' ? 'cmd' : process.platform === 'darwin' ? 'open' : 'xdg-open';
  return (0, _child_process.execFile)(cmd, args, opts, cb);
};

// options:
// bold, italic, underline, inverse,
// white, grey, black, blue, cyan, green, magenta, red, yellow
// usage:
// const c = require('./color')
// console.log(c.bold(c.blue('foo')))
var colorize = function colorize(color, text) {
  var codes = _util2.default.inspect.colors[color];
  return '\u001b[' + codes[0] + 'm' + text + '\u001b[' + codes[1] + 'm';
};
var colors = function colors() {
  var val = {};
  Object.keys(_util2.default.inspect.colors).forEach(function (color) {
    val[color] = function (text) {
      return colorize(color, text);
    };
  });
  return val;
};
var clr = exports.clr = colors();

// usage :
// lighten
// var NewColor = LightenDarkenColor('#F06D06', 20)
// darken
// var NewColor = LightenDarkenColor('#F06D06', -20)
var LightenDarkenColor = exports.LightenDarkenColor = function LightenDarkenColor(col, amt) {
  var usePound = false,
      num = parseInt(col, 16),
      r = (num >> 16) + amt,
      b = (num >> 8 & 0x00FF) + amt,
      g = (num & 0x0000FF) + amt;

  if (col[0] === '#') {
    col = col.slice(1);
    usePound = true;
  }
  if (r > 255) {
    r = 255;
  } else if (r < 0) {
    r = 0;
  }
  if (b > 255) {
    b = 255;
  } else if (b < 0) {
    b = 0;
  }
  if (g > 255) {
    g = 255;
  } else if (g < 0) {
    g = 0;
  }
  return (usePound ? '#' : '') + (g | b << 8 | r << 16).toString(16);
};

// takes input in format #rrggbb (hex)
var complimentaryCols = exports.complimentaryCols = function complimentaryCols(s) {
  return '#' + (1e5 + (Math.pow(8, 8) + ~('0x' + s.slice(1))).toString(16)).slice(-6);
};
// or
// c=>c.replace(/\w/g,x=>(15-`0x${x}`).toString(16))

var objectFromEntries = exports.objectFromEntries = function objectFromEntries(entries) {
  var res = {};
  var len = entries.length;
  for (var i = 0; i < len; ++i) {
    var ent = entries[i];
    var key = ent[0];
    var val = ent[1];
    res[key] = val;
  }
  return res;
};

// credit: gh:spicydonuts
var findWhere = exports.findWhere = function findWhere(fn, array) {
  var found = null;
  array.some(function (item, i) {
    if (fn(item, i)) {
      found = item;
      return true;
    }
    return false;
  });
  return found;
};

// credit: gh:spicydonuts
var dropWhere = exports.dropWhere = function dropWhere(fn, array) {
  var keepers = [];
  array.forEach(function (item, i) {
    if (!fn(item, i)) {
      keepers.push(item);
    }
  });
  if (array.length === keepers.length) {
    return array;
  }
  return keepers;
};

// close-to-complete email validation
var isEmail = exports.isEmail = function isEmail(email) {
  return (/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/.test(email)
  );
};

var curry = exports.curry = function curry(fn) {
  var originalArguments = getFunctionArguments(fn) || [];

  var makeCurriedFunc = function makeCurriedFunc() {
    var givenArguments = arguments || [];
    if (givenArguments.length < originalArguments.length) {
      return function () {
        for (var _len3 = arguments.length, rest = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          rest[_key3] = arguments[_key3];
        }

        return makeCurriedFunc.apply(undefined, _toConsumableArray(givenArguments).concat(rest));
      };
    } else {
      return fn.apply(undefined, _toConsumableArray(givenArguments));
    }
  };

  return function () {
    return makeCurriedFunc.apply(undefined, arguments);
  };
};

var getFunctionArguments = exports.getFunctionArguments = function getFunctionArguments(fn) {
  if (typeof fn !== 'function') {
    throw new Error('Not a function');
  }

  var functionAsString = fn.toString();

  var args = functionAsString.match(/\(.*?\)/)[0] // match everything between brackets
  .replace(/[()]/gi, '') // remove brackets
  .replace(/\s/gi, '') // remove all whitespace
  .split(','); // split on the commas

  return args.filter(function (x) {
    return x;
  }); // remove possible empty string from the result
};

// returns true if all items pass predicate fn
var all = exports.all = curry(function (predicate, list) {
  return !!list.reduce && typeof predicate === 'function' && list.reduce(function (result, current) {
    return !result ? false : !!predicate(current);
  }, true);
});

// r->l composition
var compose = exports.compose = function compose() {
  for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
  }

  return pipe.apply(undefined, _toConsumableArray(reverse(fns)));
};

// export const compose = (f, g) =>
//   x =>
//     f(g(x))

var identity = exports.identity = function identity(x) {
  return x;
};

var memoize = exports.memoize = function memoize(fn) {
  var results = new Map();
  return function () {
    for (var _len5 = arguments.length, args = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    var key = args.toString();
    if (!results.get(key)) {
      results.set(key, fn.apply(undefined, args));
    }
    return results.get(key);
  };
};

// returns true if current obj has prop that equals given val
var propEq = exports.propEq = curry(function (prop, value, data) {
  return data[prop] !== undefined && data[prop] === value;
});

// reduces data to single val
var reduce = exports.reduce = curry(function (fn, initialValue, data) {
  var reducedValue = initialValue;
  for (var i = 0; i < data.length; i++) {
    reducedValue = fn(reducedValue, data[i]);
  }
  return reducedValue;
});

// reverses array
var reverse = exports.reverse = function reverse(items) {
  var result = [];
  for (var i = items.length - 1; i >= 0; i--) {
    result.push(items[i]);
  }
  return result;
};

// l->r composition
var pipe = exports.pipe = function pipe() {
  for (var _len6 = arguments.length, fns = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
    fns[_key6] = arguments[_key6];
  }

  return function (data) {
    return reduce(function (v, fn) {
      return fn(v);
    }, data)(fns);
  };
};

// only calls fn once; subsequent calls just return first val
var once = exports.once = function once(fn) {
  var returnValue = void 0;
  return function () {
    if (!returnValue) {
      returnValue = fn.apply(undefined, arguments);
    }
    return returnValue;
  };
};

var unfold = exports.unfold = function unfold(fn, seed) {
  var r = fn(seed);
  if (!Array.isArray(r)) {
    return [];
  }
  return [r[0]].concat(unfold(fn, r[1]));
};

var getTerminalCols = exports.getTerminalCols = function getTerminalCols() {
  return process.stdout.columns;
};

var getTerminalRows = exports.getTerminalRows = function getTerminalRows() {
  return process.stdout.rows;
};

var getTerminalSize = exports.getTerminalSize = function getTerminalSize() {
  return {
    cols: process.stdout.columns,
    rows: process.stdout.rows
  };
};

function toType(val) {
  var argLen = arguments.length;
  if (argLen !== 1) {
    throw new Error('Please only pass one argument');
  }
  return {}.toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

// from MDN's parseFloat docs
var filterFloat = exports.filterFloat = function filterFloat(value) {
  if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(value)) {
    return Number(value);
  }
  return NaN;
};

var isObjectEmpty = exports.isObjectEmpty = function isObjectEmpty(obj) {
  return obj.constructor === Object && Object.keys(obj).length === 0;
};
