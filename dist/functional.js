'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var curry = exports.curry = function curry(fn) {
  var originalArguments = getFunctionArguments(fn) || [];

  var makeCurriedFunc = function makeCurriedFunc() {
    var givenArguments = arguments || [];
    if (givenArguments.length < originalArguments.length) {
      return function () {
        for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
          rest[_key] = arguments[_key];
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

// reverses array
var reverse = exports.reverse = function reverse(items) {
  var result = [];
  for (var i = items.length - 1; i >= 0; i--) {
    result.push(items[i]);
  }
  return result;
};

// r->l composition
var compose = exports.compose = function compose() {
  for (var _len2 = arguments.length, fns = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    fns[_key2] = arguments[_key2];
  }

  return pipe.apply(undefined, _toConsumableArray(reverse(fns)));
};

var identity = exports.identity = function identity(x) {
  return x;
};

var memoize = exports.memoize = function memoize(fn) {
  var results = new Map();
  return function () {
    for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
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

// l->r composition
var pipe = exports.pipe = function pipe() {
  for (var _len4 = arguments.length, fns = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    fns[_key4] = arguments[_key4];
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

var not = exports.not = function not(a) {
  return function (b) {
    return a !== b;
  };
};

var pair = exports.pair = function pair(f, s) {
  return [f, s];
};

var map = exports.map = function map(fn, xs) {
  return xs.map(fn);
};

var zip = exports.zip = function zip(xs, l) {
  return map(function (x, i) {
    return pair(x, l[i]);
  }, xs);
};

var zipWith = exports.zipWith = function zipWith(fn, xs, arr) {
  return map(function (x, i) {
    return fn.apply(fn, pair(x, arr[i]));
  }, xs);
};

var invoke = exports.invoke = function invoke(fn) {
  for (var _len5 = arguments.length, args = Array(_len5 > 1 ? _len5 - 1 : 0), _key5 = 1; _key5 < _len5; _key5++) {
    args[_key5 - 1] = arguments[_key5];
  }

  return fn.apply(undefined, args);
};

var zipThen = exports.zipThen = function zipThen(after, xs) {
  return function () {
    for (var _len6 = arguments.length, list = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
      list[_key6] = arguments[_key6];
    }

    return after.apply(after, zipWith(invoke, xs, list));
  };
};