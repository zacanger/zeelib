'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.greatestCommonDivisor = greatestCommonDivisor;
exports.leastCommonMultiple = leastCommonMultiple;
exports.isType = isType;
exports.toType = toType;
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
var isPow2 = exports.isPow2 = function isPow2(n) {
  return 1 << n.toString(2).length - 1 === n;
};

function toType(val) {
  var argLen = arguments.length;
  if (argLen !== 1) {
    throw new Error('Please only pass one argument');
  }
  return {}.toString.call(val).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}